package com.fh.plugin.websocketInstantMsg;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.UnknownHostException;
import java.util.Date;
import java.util.List;

import net.sf.json.JSONObject;

import org.java_websocket.WebSocket;
import org.java_websocket.WebSocketImpl;
import org.java_websocket.framing.Framedata;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;

import com.fh.service.fhim.friends.FriendsManager;
import com.fh.service.fhim.hismsg.HismsgManager;
import com.fh.service.fhim.imstate.ImstateManager;
import com.fh.service.fhim.iqgroup.IQgroupManager;
import com.fh.service.fhim.qgroup.QgroupManager;
import com.fh.service.fhim.sysmsg.SysmsgManager;
import com.fh.util.Const;
import com.fh.util.DateUtil;
import com.fh.util.PageData;
import com.fh.util.Tools;
import com.fh.util.UuidUtil;


/**
 * 即时通讯
 * @author FH Admin
 * QQ  3 13 596790
 * 修改日期：2018-8-5
 */
public class ChatServer extends WebSocketServer{

	public ChatServer(int port) throws UnknownHostException {
		super(new InetSocketAddress(port));
	}

	public ChatServer(InetSocketAddress address) {
		super(address);
	}

	/**
	 * 客户端发送消息到服务器时触发事件
	 */
	@Override
	public void onMessage(WebSocket conn, String message){
		message = message.toString();
		if(null != message && message.startsWith(",fhadmin-msg,")){			 		//用户发送的数据消息
			this.usersendmsg(message.replaceFirst(",fhadmin-msg,", ""), conn);
		}else if(null != message && message.startsWith(",fhadmin-join,")){			//用户上线消息
			this.userjoin(message.replaceFirst(",fhadmin-join,", ""),conn); 
		}else if(null != message && message.startsWith(",fhadmin-leave,")){			//用户下线消息
			this.userLeave(conn);
		}else if(null != message && message.startsWith(",fhadmin-online,")){		//用户设置在线消息
			this.useronline(message.replaceFirst(",fhadmin-online,", ""),conn); 
		}else if(null != message && message.startsWith(",fhadmin-hide,")){			//用户设置隐身消息
			this.userhide(message.replaceFirst(",fhadmin-hide,", ""),conn); 
		}else if(null != message && message.startsWith(",fhadmin-applyfriend,")){	//申请好友消息
			this.applyfriend(message.replaceFirst(",fhadmin-applyfriend,", ""),conn); 
		}else if(null != message && message.startsWith(",fhadmin-remove,")){		//用户删除好友消息
			this.userremove(message.replaceFirst(",fhadmin-remove,", ""),conn); 
		}else if(null != message && message.startsWith(",fhadmin-agreefriend,")){	//同意添加好友
			this.agreefriend(message.replaceFirst(",fhadmin-agreefriend,", ""),conn); 
		}else if(null != message && message.startsWith(",fhadmin-applyqgroup,")){	//申请加群
			this.applyqgroup(message.replaceFirst(",fhadmin-applyqgroup,", ""),conn); 
		}else if(null != message && message.startsWith(",fhadmin-agreeqgroup,")){	//同意加群
			this.agreeqgroup(message.replaceFirst(",fhadmin-agreeqgroup,", ""),conn); 
		}else if(null != message && message.startsWith(",fhadmin-kickoutqgroup,")){	//踢出群
			this.kickoutqgroup(message.replaceFirst(",fhadmin-kickoutqgroup,", ""),conn); 
		}else if(null != message && message.startsWith(",fhadmin-delqgroup,")){		//解散群
			this.delqgroup(message.replaceFirst(",fhadmin-delqgroup,", ""),conn); 
		}
	}
	
	/**
	 * 发送消息
	 * @param message
	 * @param conn
	 * @throws Exception 
	 */
	public void usersendmsg(String message, WebSocket conn){
		WebApplicationContext webctx=ContextLoader.getCurrentWebApplicationContext();					//普通类从spring容器中拿出service
		HismsgManager hismsgService = (HismsgManager)webctx.getBean("hismsgService");
		String arrmessage[] = message.split(",fh,");
		String user = arrmessage[0];	//发送者用户名
		String uname = arrmessage[1];	//发送者用户姓名
		String id = arrmessage[2];		//接收者用户名(或群的ID)
		String type=arrmessage[3];		//消息类型 group or friend
		String avatar=arrmessage[4];	//发送者用户头像
		String content= arrmessage[5];	//消息内容
		JSONObject result = new JSONObject();
		result.element("username", uname);
		result.element("avatar", avatar);
		result.element("type", type);
		result.element("content", content);
		if("friend".equals(type)){
			result.element("id", user);		//此id得是发送者的了(消息来源)
			ChatServerPool.sendMessageToUser(ChatServerPool.getWebSocketByUser(id),result.toString());	//向某用户发送消息
			/*存储与好友的聊天记录*/
			PageData pd = new PageData();
			pd.put("USERNAME", user);					//发送者
			pd.put("TOID", id);							//目标(好友)
			pd.put("TYPE", "friend");					//类型
			pd.put("NAME", uname);						//发送者姓名
			pd.put("PHOTO", avatar);					//发送者头像
			pd.put("CTIME", DateUtil.getTime());		//发送时间
			pd.put("CONTENT", content);					//发送消息内容
			try {
				pd.put("OWNER", user);						//所有者是发信人
				pd.put("DREAD", "1");						//是否已读
				pd.put("HISMSG_ID", UuidUtil.get32UUID());	//主键
				hismsgService.save(pd);
				pd.put("OWNER", id);						//所有者是收信人(聊天记录存储两条，两者各自删除自己的聊天记录不影响对方)
				pd.put("DREAD", null == ChatServerPool.getWebSocketByUser(id)?"0":"1");	//是否已读
				pd.put("HISMSG_ID", UuidUtil.get32UUID());	//主键
				hismsgService.save(pd);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}else{
			result.element("id", id);		//群ID(消息来源)
			IQgroupManager iqgroupService = (IQgroupManager)webctx.getBean("iqgroupService");
			PageData pd = new PageData();
			pd.put("QGROUP_ID", id);
			List<PageData> varList;
			try {
				varList = iqgroupService.listAll(pd);
				for(int i=0;i<varList.size();i++){
					/*存储群的聊天记录*/
					PageData qpd = new PageData();
					qpd.put("HISMSG_ID", UuidUtil.get32UUID());	//主键
					qpd.put("USERNAME", user);					//发送者
					qpd.put("TOID", id);						//目标(群)
					qpd.put("TYPE", "group");					//类型
					qpd.put("NAME", uname);						//发送者姓名
					qpd.put("PHOTO", avatar);					//发送者头像
					qpd.put("CTIME", DateUtil.getTime());		//发送时间
					qpd.put("CONTENT", content);				//发送消息内容
					qpd.put("DREAD", "0");						//是否已读
					qpd.put("OWNER", "");						//所有者(群为空)
					try {
						hismsgService.save(qpd);
					} catch (Exception e) {
						e.printStackTrace();
					}
					String USERNAME = varList.get(i).getString("USERNAME");
					if(user.equals(USERNAME))continue;													//不发给本人(群消息的发送者不接收自己发的消息)
					WebSocket ws = ChatServerPool.getWebSocketByUser(USERNAME);
					if(null != ws){	//在线的群成员
						ChatServerPool.sendMessageToUser(ws,result.toString());							//向群成员发送消息
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	/**
	 * 用户加入处理
	 * @param user
	 * @param conn
	 * @throws Exception 
	 */
	public void userjoin(String user, WebSocket conn){
		ChatServerPool.addUser(user,conn);													//向连接池添加当前的连接对象
		PageData pd = new PageData();
		WebApplicationContext webctx=ContextLoader.getCurrentWebApplicationContext();		//普通类从spring容器中拿出service
		ImstateManager imstateService = (ImstateManager)webctx.getBean("imstateService");
		pd.put(Const.SESSION_USERNAME,user);
		try {
			PageData ipd = new PageData();
			ipd =imstateService.findByUsername(pd);
			if(null == ipd || "online".equals(ipd.getString("ONLINE"))){						//只有用户设置的状态为在线的时候，才会向别人发送上线消息
				JSONObject result = new JSONObject();
				result.element("type", "user_join");
				result.element("user", user);
				FriendsManager friendsService = (FriendsManager)webctx.getBean("friendsService");
				List<PageData> varlist = friendsService.listAllFri(pd);						//所有有自己好友的用户
				for(int i=0;i<varlist.size();i++){
					if(i==0)result.element("name", varlist.get(i).getString("NAME"));
					WebSocket ws = ChatServerPool.getWebSocketByUser(varlist.get(i).getString("USERNAME"));
					if(null == ws)continue;
					ChatServerPool.sendMessageToUser(ws,result.toString());					//只向有自己好友的用户发送上线消息
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 用户下线处理
	 * @param conn
	 */
	public void userLeave(WebSocket conn){
		String user = ChatServerPool.getUserByKey(conn);
		boolean b = ChatServerPool.removeUser(conn);				//在连接池中移除连接
		if(b){
			PageData pd = new PageData();
			WebApplicationContext webctx=ContextLoader.getCurrentWebApplicationContext();		//普通类从spring容器中拿出service
			ImstateManager imstateService = (ImstateManager)webctx.getBean("imstateService");
			pd.put(Const.SESSION_USERNAME,user);
			try {
				PageData ipd = new PageData();
				ipd =imstateService.findByUsername(pd);
				if(null == ipd || "online".equals(ipd.getString("ONLINE"))){						//只有用户设置的状态为在线的时候，才会向别人发送上线消息
					JSONObject result = new JSONObject();
					result.element("type", "user_leave");
					result.element("user", user);												//用户名
					FriendsManager friendsService = (FriendsManager)webctx.getBean("friendsService");
					List<PageData> varlist = friendsService.listAllFri(pd);						//所有有自己好友的用户
					for(int i=0;i<varlist.size();i++){
						if(i==0)result.element("name", varlist.get(i).getString("NAME"));
						WebSocket ws = ChatServerPool.getWebSocketByUser(varlist.get(i).getString("USERNAME"));
						if(null == ws)continue;
						ChatServerPool.sendMessageToUser(ws,result.toString());					//只向有自己好友的用户发送下线消息
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	/**
	 * 用户设置在线状态
	 * @param user
	 * @param conn
	 * @throws Exception 
	 */
	public void useronline(String user, WebSocket conn){
		PageData pd = new PageData();
		pd.put(Const.SESSION_USERNAME,user);
		WebApplicationContext webctx=ContextLoader.getCurrentWebApplicationContext();		//普通类从spring容器中拿出service
		try {
			JSONObject result = new JSONObject();
			result.element("type", "user_online");
			result.element("user", user);
			FriendsManager friendsService = (FriendsManager)webctx.getBean("friendsService");
			List<PageData> varlist = friendsService.listAllFri(pd);							//所有有自己好友的用户
			for(int i=0;i<varlist.size();i++){
				WebSocket ws = ChatServerPool.getWebSocketByUser(varlist.get(i).getString("USERNAME"));
				if(null == ws)continue;
				ChatServerPool.sendMessageToUser(ws,result.toString());						//只向有自己好友的用户发送在线状态消息
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 用户设置隐身状态
	 * @param user
	 * @param conn
	 * @throws Exception 
	 */
	public void userhide(String user, WebSocket conn){
		PageData pd = new PageData();
		pd.put(Const.SESSION_USERNAME,user);
		WebApplicationContext webctx=ContextLoader.getCurrentWebApplicationContext();		//普通类从spring容器中拿出service
		try {
			JSONObject result = new JSONObject();
			result.element("type", "user_hide");
			result.element("user", user);
			FriendsManager friendsService = (FriendsManager)webctx.getBean("friendsService");
			List<PageData> varlist = friendsService.listAllFri(pd);							//所有有自己好友的用户
			for(int i=0;i<varlist.size();i++){
				WebSocket ws = ChatServerPool.getWebSocketByUser(varlist.get(i).getString("USERNAME"));
				if(null == ws)continue;
				ChatServerPool.sendMessageToUser(ws,result.toString());						//只向有自己好友的用户发送隐身状态消息
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 申请加好友
	 * @param message
	 * @throws Exception 
	 */
	public void applyfriend(String message, WebSocket conn){
		JSONObject result = new JSONObject();
		result.element("type", "user_applyfriend");
		ChatServerPool.sendMessageToUser(ChatServerPool.getWebSocketByUser(message),result.toString());//向某用户发送消息
	}
	
	/**
	 * 用户删除好友(被动删，被拉黑)
	 * @param message
	 * @throws Exception 
	 */
	public void userremove(String message, WebSocket conn){
		String arrmessage[] = message.split(",fh,");
		JSONObject result = new JSONObject();
		result.element("type", "user_emove");
		result.element("user", arrmessage[0]);
		ChatServerPool.sendMessageToUser(ChatServerPool.getWebSocketByUser(arrmessage[1]),result.toString());//向某用户发送消息
	}
	
	/**
	 * 同意添加好友
	 * @param message
	 * @throws Exception 
	 */
	public void agreefriend(String message, WebSocket conn){
		WebApplicationContext webctx=ContextLoader.getCurrentWebApplicationContext();		//普通类从spring容器中拿出service
		
		String arrmessage[] = message.split(",fh,");
		String USERNAME = arrmessage[0];	//我的用户名
		String FUSERNAME = arrmessage[1];	//好友的用户
		try {
			FriendsManager friendsService = (FriendsManager)webctx.getBean("friendsService");
			PageData pd = new PageData();
			pd.put("USERNAME", USERNAME);
			pd.put("FUSERNAME", FUSERNAME);
			pd = friendsService.getTheFriend(pd);							//获取当前用户的基本信息(发送给申请人)
			
			JSONObject result = new JSONObject();
			result.element("username", pd.getString("NAME"));															//当前用户姓名
			result.element("id", USERNAME);																				//当前用户名
			result.element("groupid", pd.getString("FGROUP_ID"));														//分组ID	
			result.element("status", null == pd.get("ONLINE") ?"online":pd.getString("ONLINE"));						//在线状态
			result.element("sign", null == pd.get("AUTOGRAPH") ?"个性签名":pd.getString("AUTOGRAPH"));					//个性签名
			result.element("avatar", null == pd.get("PHOTO2")?"static/ace/avatars/user.jpg":pd.getString("PHOTO2"));	//当前用户头像
			result.element("type", "agreefriend");

			ChatServerPool.sendMessageToUser(ChatServerPool.getWebSocketByUser(FUSERNAME),result.toString());//向某用户发送消息
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 申请加群
	 * @param message
	 * @throws Exception 
	 */
	public void applyqgroup(String message, WebSocket conn){
		WebApplicationContext webctx=ContextLoader.getCurrentWebApplicationContext();		//普通类从spring容器中拿出service
		QgroupManager qgroupService = (QgroupManager)webctx.getBean("qgroupService");
		PageData pd = new PageData();
		pd.put("QGROUP_ID", message);
		try {
			pd = qgroupService.findById(pd);
			JSONObject result = new JSONObject();
			result.element("type", "applyqgroup");
			ChatServerPool.sendMessageToUser(ChatServerPool.getWebSocketByUser(pd.getString("USERNAME")),result.toString());//向群主发送消息
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 同意加入群
	 * @param message
	 * @throws Exception 
	 */
	public void agreeqgroup(String message, WebSocket conn){
		String arrmessage[] = message.split(",fh,");
		String USERNAME = arrmessage[0];	//用户名
		String QGROUP_ID = arrmessage[1];	//群ID
		WebApplicationContext webctx=ContextLoader.getCurrentWebApplicationContext();		//普通类从spring容器中拿出service
		QgroupManager qgroupService = (QgroupManager)webctx.getBean("qgroupService");
		PageData pd = new PageData();
		pd.put("QGROUP_ID", QGROUP_ID);
		try {
			pd = qgroupService.findById(pd);
			JSONObject result = new JSONObject();
			result.element("type", "agreeqgroup");
			result.element("id", QGROUP_ID);						//群ID
			result.element("groupname", pd.getString("NAME"));		//群名
			result.element("avatar", (null == pd.getString("PHOTO") || "".equals(pd.getString("PHOTO")))?"static/ace/avatars/user.jpg":pd.getString("PHOTO"));		//群头像
			ChatServerPool.sendMessageToUser(ChatServerPool.getWebSocketByUser(USERNAME),result.toString());//向某用户发送消息
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 踢出群
	 * @param message
	 * @throws Exception 
	 */
	public void kickoutqgroup(String message, WebSocket conn){
		String arrmessage[] = message.split(",fh,");
		String USERNAME = arrmessage[0];	//用户名
		String QGROUP_ID = arrmessage[1];	//群ID
		JSONObject result = new JSONObject();
		result.element("type", "kickoutqgroup");
		result.element("id", QGROUP_ID);	//群ID
		ChatServerPool.sendMessageToUser(ChatServerPool.getWebSocketByUser(USERNAME),result.toString());//向某用户发送消息
	}
	
	/**
	 * 解散群
	 * @param user
	 * @param conn
	 * @throws Exception 
	 */
	public void delqgroup(String QGROUP_ID, WebSocket conn){
		PageData pd = new PageData();
		pd.put("QGROUP_ID", QGROUP_ID);
		WebApplicationContext webctx=ContextLoader.getCurrentWebApplicationContext();		//普通类从spring容器中拿出service
		try {
			JSONObject result = new JSONObject();
			result.element("type", "delqgroup");
			result.element("QGROUP_ID", QGROUP_ID);
			
			QgroupManager qgroupService = (QgroupManager)webctx.getBean("qgroupService");
			SysmsgManager sysmsgService = (SysmsgManager)webctx.getBean("sysmsgService");
			IQgroupManager iqgroupService = (IQgroupManager)webctx.getBean("iqgroupService");
			
			List<PageData> varList = iqgroupService.listAll(pd);		//获取群成员
			String qname = qgroupService.findById(pd).getString("NAME");//群名
			
			for(int i=0;i<varList.size();i++){
				String USERNAME = varList.get(i).getString("USERNAME");
				/*存入IM系统消息表中IM_SYSMSG*/
				pd.put("SYSMSG_ID", UuidUtil.get32UUID());			//主键
				pd.put("USERNAME", USERNAME);						//接收者用户名
				pd.put("FROMUSERNAME", "系统");						//发送者
				pd.put("CTIME", Tools.date2Str(new Date()));		//操作时间
				pd.put("REMARK", "");								//留言
				pd.put("TYPE", "group");							//类型
				pd.put("CONTENT", "群："+qname+" 解散了");			//事件内容
				pd.put("ISDONE", "yes");							//是否完成
				pd.put("DTIME", Tools.date2Str(new Date()));		//完成时间
				pd.put("QGROUP_ID", QGROUP_ID);						//群ID
				pd.put("DREAD", "0");								//阅读状态 0 未读
				sysmsgService.save(pd);
				WebSocket ws = ChatServerPool.getWebSocketByUser(USERNAME);
				if(null == ws)continue;
				result.element("CONTENT", "群："+qname+" 解散了");
				ChatServerPool.sendMessageToUser(ws,result.toString());						//只向在线的群成员推送消息，移除群里面的此群
			}
			
			if(varList.size() > 0){							
				for(int i=0;i<varList.size();i++){
					PageData ipd = new PageData();
					ipd = varList.get(i);
					ipd.put("QGROUPS", ipd.getString("QGROUPS").replaceAll("'"+pd.getString("QGROUP_ID")+"',", "")); //从每个群成员移除此群的ID
					iqgroupService.edit(ipd);
				}
			}
			
			qgroupService.delete(pd);	//删除群
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 触发关闭事件
	 */
	@Override
	public void onClose( WebSocket conn, int code, String reason, boolean remote ) {
		userLeave(conn);
	}
	
	/**
	 * 触发异常事件(废弃，用发消息类型代替)
	 */
	@Override
	public void onError( WebSocket conn, Exception ex ) {
		ex.printStackTrace();
		if( conn != null ) {
			//some errors like port binding failed may not be assignable to a specific websocket
		}
	}
	
	/**
	 * 触发连接事件(废弃，用发消息类型代替)
	 */
	@Override
	public void onOpen( WebSocket conn, ClientHandshake handshake ) {
		//this.sendToAll( "new connection: " + handshake.getResourceDescriptor() );
		//System.out.println("===" + conn.getRemoteSocketAddress().getAddress().getHostAddress());
	}
	
	public void onFragment( WebSocket conn, Framedata fragment ) {
	}
	
	public static void main( String[] args ) throws InterruptedException , IOException {
		WebSocketImpl.DEBUG = false;
		int port = 8887; //端口
		ChatServer s = new ChatServer(port);
		s.start();
		//System.out.println( "服务器的端口" + s.getPort() );
	}

}








/**
 * 即时通讯
 * @author FH Admin
 * QQ  3 13 59 679 0
 */
import React from "react";
import "./style.scss";

import Avatar from "../../Avatar";

const messageheader = (props) => {

  let status, image;
  if(props.type === "user") {
    status = props.item.status;
    image = props.item.avatar;
  } else {
    status = props.item.type;
    image = props.item.icon;
  }
  
  let viewDetailBtn = "", audioCallBtn = "", videoCallBtn = "";
  
  if(!props.item.blockedByMe && props.audiocall) {
    audioCallBtn = (<span onClick={() => props.actionGenerated("audioCall")} className="cc1-chat-win-con-opt call"></span>);
  }

  if(!props.item.blockedByMe && props.videocall) {
    videoCallBtn = (<span onClick={() => props.actionGenerated("videoCall")} className="cc1-chat-win-con-opt video-call"></span>);
  }
  
  if(props.viewdetail) {
    viewDetailBtn = (<span onClick={() => props.actionGenerated("viewDetail")} className="cc1-chat-win-con-opt details"></span>);
  }

  return (
    <div className="cc1-chat-win-header clearfix">
      <div className="cc1-chat-win-user">
        <div className="cc1-chat-win-user-thumb">
          <Avatar 
          image={image} 
          cornerRadius="18px" 
          borderColor="#CCC"
          borderWidth="1px"></Avatar>
        </div>
        <div className="cc1-chat-win-user-name-wrap">
          <h6 className="cc1-chat-win-user-name">{props.item.name}</h6>
          <span className="cc1-chat-win-user-status ccl-blue-color">{status}</span>
        </div>
      </div>
      <div className="cc1-chat-win-con-opt-wrap">
        {audioCallBtn}
        {videoCallBtn}
        {viewDetailBtn}
      </div>
    </div>
  )
}

export default React.memo(messageheader);
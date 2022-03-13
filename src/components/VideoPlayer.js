import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="vid-area">
      {stream && (
        <div className="vid vid-1">
          <p className="name">{name || "Name"}</p>
          <video playsInline ref={myVideo} autoPlay className="vid-player" />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="vid vid-2">
          <p className="name">{call.name || "Name"}</p>
          <video playsInline ref={userVideo} autoPlay className="vid-player" />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;

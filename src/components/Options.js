import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

function Options({ children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="options">
      <form action="">
        <fieldset>
          <label htmlFor="">Enter Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CopyToClipboard text={me}>
            <span
              onClick={() => setIsCopied(true)}
              style={{
                border: "1px solid black",
                backgroundColor: "green",
                cursor: "pointer",
                color: "white",
                padding: "2px",
                marginLeft: "5px",
              }}
            >
              Click to copy ID
            </span>
          </CopyToClipboard>
          {isCopied ? (
            <span
              style={{ color: "blue", forntWeight: "bold", marginLeft: "5px" }}
            >
              An ID has been copied.
            </span>
          ) : (
            ""
          )}
        </fieldset>

        <fieldset>
          <label htmlFor="">Make a call: </label>
          <input
            type="text"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          {callAccepted && !callEnded ? (
            <button
              style={{ color: "red", fontWeight: "bold" }}
              onClick={leaveCall}
            >
              Hang up call
            </button>
          ) : (
            <button
              style={{ color: "green", fontWeight: "bold", marginLeft: "5px" }}
              onClick={(e) => {
                e.preventDefault();
                return callUser(idToCall);
              }}
            >
              Call
            </button>
          )}
          {isCopied ? (
            <span style={{ color: "blue", fontWeight: "bold" }}>
              {" "}
              {"<--"} Paste ID here and call
            </span>
          ) : (
            ""
          )}
        </fieldset>
      </form>

      <p>Options</p>
      {children}
    </div>
  );
}

export default Options;

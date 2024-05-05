import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utilities/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const formattedTime = extractTime(message.createdAt);

  const fromMe = message.senderId === authUser.id;
  // console.log(authUser._id);

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? `bg-blue-500` : `bg-gray-700`;
  const bubbleTextColor = fromMe ? `text-gray-800` : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div
          className={`chat-bubble ${bubbleBgColor} ${shakeClass} ${bubbleTextColor} pb-2`}
        >
          {message.message}
        </div>
        <time className="chat-footer text-xs opacity-50 flex gap-1 items-center mt-auto">
          {formattedTime}
        </time>
      </div>
    </>
  );

  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <time className="chat-footer text-xs opacity-50 flex gap-1 items-center mt-auto">
          12:46
        </time>
      </div>

      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <time className="text-xs opacity-50">12:46</time>
      </div>
    </>
  );
};

export default Message;

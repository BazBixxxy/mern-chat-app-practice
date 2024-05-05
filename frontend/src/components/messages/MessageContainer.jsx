import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "../NoChatSelected";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // ! clean up function to clear the selected conversation information
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <section className="md:min-w-[450px] flex flex-col w-screen">
      {!selectedConversation ? (
        <NoChatSelected /> 
      ) : (
        <>
          <div className="bg-slate-700 px-4 py-2 mb-2">
            <span className="label-text"></span>
            {""}
            <span className="text-gray-400 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </section>
  );
};

export default MessageContainer;

import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";
import { getRandomEmoji } from "../utilities/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  // console.log(getRandomEmoji);
  // console.log(conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          // setting the conversation prop can be very useful when passing the data down to each conversation
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversations.length - 1}
          index={index}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;

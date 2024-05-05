import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { useAuthContext } from "../context/AuthContext";

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-medium flex flex-col items-center gap-2">
        {/* <p>Welcome 👋🏽 {authUser.fullName}</p> */}
        <p>Select a chat a beginning messaging</p>
        <LuMessagesSquare className="md:text-3xl text-center text-5xl" />
      </div>
    </div>
  );
};

export default NoChatSelected;

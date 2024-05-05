import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "../components/Conversations";
import Logout from "../components/Logout";

const Sidebar = () => {
  

  return (
    <div className="border-r border-slate-400 px-4 flex flex-col py-5">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <Logout />
    </div>
  );
};

export default Sidebar;

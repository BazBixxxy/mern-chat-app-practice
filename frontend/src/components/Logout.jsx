import React from "react";
import { SlLogout } from "react-icons/sl";
import useLogout from "../hooks/useLogout";

const Logout = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto p-2">
      <SlLogout onClick={logout} className="text-lg cursor-pointer" />
    </div>
  );
};

export default Logout;

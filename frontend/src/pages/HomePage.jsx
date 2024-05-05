import React from "react";
import Sidebar from "../components/Sidebar";
import MessageContainer from "../components/messages/MessageContainer";

const HomePage = () => {
  return (
    <section className="flex sm:h-[450px] md:h-[600px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </section>
  );
};

export default HomePage;

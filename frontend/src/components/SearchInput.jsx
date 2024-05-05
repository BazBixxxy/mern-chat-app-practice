import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("Not found");
    }
  };

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          className="input input-bordered rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-ghost bg-sky-900 text-white">
          <CiSearch className="text-lg" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;

import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      toast.error("Search must be longer than 3 characters long");
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user/conversation found");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-square bg-sky-500 text-white">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
};

export default SearchInput;

import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchInput = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-square bg-sky-500 text-white">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
};

export default SearchInput;

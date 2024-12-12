import { FaSearch } from "react-icons/fa";

type tyProps = {
  setSearch: (search: string) => void;
};
function SearchInput({ setSearch }: tyProps) {
  return (
    <div className="relative flex-1 mx-4 max-md:my-2 ">
      <form
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search Product"
          className="w-full border py-2 px-9 text-black rounded-full"
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="absolute top-3 left-3 text-slate-500" />
      </form>
    </div>
  );
}

export default SearchInput;

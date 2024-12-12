import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/image/logo.webp";
import SearchInput from "./SearchInput";

type props = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: (search: string) => void;
};
function NavBer({ theme, setTheme, setSearch }: props) {
  return (
    <nav>
      <div className={`flex items-center justify-between lg:px-8 p-3  `}>
        <div className={`flex items-center`}>
          <img src={logo} alt="" className={`w-10`} />
          <h1 className="md:block hidden">Games-Store</h1>
        </div>
        {/* search  */}
        <SearchInput setSearch={setSearch} />
        {/* theme mode  */}
        <div
          className={`w-10 h-6 p-1 rounded-full flex items-center max-md:mr-12  ${
            theme ? "bg-slate-100 justify-end border" : "  bg-slate-700 "
          }`}
        >
          <div
            className={`w-4 h-4  rounded-full relative duration-500 group ${
              theme ? "text-yellow-500" : " "
            } `}
            onClick={() => setTheme(!theme)}
          >
            {theme ? <FaSun /> : <FaMoon />}
            <div className="absolute top-4 bg-slate-600/30 rounded-lg text-sm mt-1  text-white group-hover:block hidden  ">
              {theme ? "Light" : " Dark"}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBer;

import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { tyPlatform } from "../UseHook/useGame";
import usePlatform from "../UseHook/usePlatform";

type tyProps = {
  setSelectePlatform: (platform: tyPlatform | null) => void;
  selectPlatform: tyPlatform | null;
  theme: boolean;
};

function PlatformSeleter({
  setSelectePlatform,
  selectPlatform,
  theme,
}: tyProps) {
  const { data } = usePlatform();
  const [click, setClick] = useState(false);

  return (
    <div className="m-6 cursor-pointer">
      <div
        onClick={() => setClick(!click)}
        className={`flex items-center gap-3 py-3 px-5  w-fit rounded-lg ${
          theme ? "bg-slate-200" : "bg-neutral-900"
        }`}
      >
        {selectPlatform ? selectPlatform.name : "Platforms"}
        {click ? <FaArrowDown /> : <FaArrowUp />}
      </div>
      {click && (
        <ul
          className={`absolute py-3 px-5 mt-3 w-44 z-10  rounded-lg ${
            theme ? "bg-slate-200" : "bg-neutral-700 "
          }`}
        >
          <li
            onClick={() => {
              setClick(!click), setSelectePlatform(null);
            }}
            className="p-2 duration-100 hover:scale-105  hover:bg-slate-600 rounded-md"
          >
            All
          </li>
          {data?.map((item) => (
            <li
              onClick={() => {
                setClick(!click), setSelectePlatform(item);
              }}
              key={item.id}
              className="p-2 duration-100 hover:scale-105  hover:bg-slate-600 rounded-md"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlatformSeleter;

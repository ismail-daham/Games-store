import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

type props = {
  setSortOrder: (sort: { value: string; label: string }) => void;
  sortOrder: {
    value: string;
    label: string;
  } | null;

  theme: boolean;
};

function SpotSelecter({ setSortOrder, sortOrder, theme }: props) {

  
  
  
  const [click, setClick] = useState(false);
  const sortItem = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Neme" },
    { value: "-release ", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average reting" },
  ];


  return (
    <div>
      <div className="m-6 cursor-pointer">
        <div
          onClick={() => setClick(!click)}
          className={`flex items-center gap-3 py-3 px-5  w-fit rounded-lg ${
            theme ? "bg-slate-200" : "bg-neutral-900"
          }`}
        >
          <span>
          Order By : 
          </span>
          <span className="font-bold">
          {  (sortOrder ? sortOrder.label : "Relevance")}

          </span>
          {click ? <FaArrowDown /> : <FaArrowUp />}
        </div>
        {click && (
          <ul  className={`absolute py-3 px-5 mt-3 w-44 z-10  rounded-lg ${
            theme ? "bg-slate-200" : "bg-neutral-700 "
          }`}>
            {/* <li
            onClick={() => {
              setClick(!click)
            }}
            className="p-2 duration-100 hover:scale-105  hover:bg-slate-600 rounded-md"
          >
            All
          </li> */}
            {sortItem.map((item, index) => (
              <li
                onClick={() => {
                  setClick(!click), setSortOrder(item);
                }}
                key={index}
                className="p-2 duration-100 hover:scale-105  hover:bg-slate-600 rounded-md"
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SpotSelecter;

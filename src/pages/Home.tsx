import { useState } from "react";
import NavBer from "../components/NavBer";
import GameGrid from "../components/GameGrid";
import Genres from "../components/Genres";
import { tyGenre } from "../UseHook/useGener";
import PlatformSeleter from "../components/PlatformSeleter";
import { tyPlatform } from "../UseHook/useGame";
import SrotSelecter from "../components/SrotSelected";
import { IoMenu } from "react-icons/io5";
import GameHeading from "../components/GameHeading";

export type tyGameQuery = {
  platform: tyPlatform | null;
  genre: tyGenre | null;
  sortOrder: {
    value: string;
    label: string;
  } | null;
  search: string | null;
};

function Home() {
  const [theme, setTheme] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const [seleteGameQuery, setSeleteGameQuery] = useState<tyGameQuery>(
    {} as tyGameQuery
  );

 

  

  return (
    <div
      className={` h-full py-2 min-h-screen  m-auto${
        theme ? "bg-slate-200" : " text-white bg-neutral-950"
      }`}
    >
      {/* nav */}
      <div className="">
        <div className=" md:hidden">
          <IoMenu
            className="mx-3 absolute z-20 text-2xl  right-2 my-7 "
            onClick={() => setOpenMenu(!openMenu)}
          />
          {openMenu && (
            <div
              className={`absolute z-10 top-0 right-0    py-10 ${
                theme ? "bg-slate-300" : "bg-neutral-900"
              }`}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Genres
                setSeleteGenre={(genre) =>
                  setSeleteGameQuery({ ...seleteGameQuery, genre })
                }
                seleteGenre={seleteGameQuery.genre}
              />
            </div>
          )}
        </div>
        <NavBer
          theme={theme}
          setTheme={setTheme}
          setSearch={(search) =>
            setSeleteGameQuery({ ...seleteGameQuery, search })
          }
        />
      </div>

      <div className="flex justify-center ">
        <div className="  md:block  hidden w-1/6">
          <Genres
            setSeleteGenre={(genre) =>
              setSeleteGameQuery({ ...seleteGameQuery, genre })
            }
            seleteGenre={seleteGameQuery.genre}
          />
        </div>
        <div className="  lg:w-5/6">
          <GameHeading gameQuery={seleteGameQuery} />
          {/* platform or sort  */}
          <div className="flex items-center">
            <div className="text-6xl ">
              
            </div>
            <PlatformSeleter
              theme={theme}
              setSelectePlatform={(platform) =>
                setSeleteGameQuery({ ...seleteGameQuery, platform })
              }
              selectPlatform={seleteGameQuery.platform}
            />
            <SrotSelecter
              theme={theme}
              sortOrder={seleteGameQuery.sortOrder}
              setSortOrder={(sortOrder) =>
                setSeleteGameQuery({ ...seleteGameQuery, sortOrder })
              }
            />
          </div>

          <GameGrid theme={theme} seleteGameQuery={seleteGameQuery} />
        </div>
      </div>
    </div>
  );
}

export default Home;

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { tyGames } from "../UseHook/useGame";

type Game = {
  game: tyGames;
  theme: boolean;
};

function GameCard({ game, theme }: Game) {
  const iconMap: any = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <SiNintendo />,
    mac: <FaApple />,
    linux: <FaLinux />,
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
  };



  let scoerGame =
    game.metacritic > 80
      ? ["bg-green-600/25","🎯"]
      : game.metacritic > 60
      ? ["bg-yellow-600/25","👍"]
      : game.metacritic > 40
      ? ["bg-orang-600/25","😐"]
      : ["bg-red-600/25","🙁"];

  return (
    <div
      className={` rounded-md   mx-auto duration-300 group hover:scale-110  ${
        theme ? "bg-slate-200" : "bg-neutral-900"
      }`}
    >
      <img
        src={game.background_image}
        alt=""
        className="w-96 h-56 sm:w-auto rounded-t-md  group-hover:hidden"
      />
      <video
        className="w-96 h-auto rounded-t-md hidden group-hover:block "
        src="https://media.rawg.io/media/stories-640/a31/a3184b28f9920fc2e69094fdcac75ef7.mp4"
        autoPlay
        muted
      ></video>
      <div className="p-5 space-y-7 ">
        
        <div className="flex justify-between items-center  ">
          <div className="flex gap-3 ">
            {game.parent_platforms?.map((item) => (
              <span key={item.platform.id} className="hover:scale-110  ">
                {iconMap[item.platform.slug]}
                <span className="hidden ">{item.platform.name}</span>
              </span>
            ))}


          </div>

          <h3 className={`p-1 mb-1 rounded-md  ${scoerGame[0]}`}>
            {game.metacritic}
          </h3>
          
   
          
        </div>
        <h1 className="text-2xl ">{game.name} <span>{scoerGame[1]}</span></h1>
      </div>
    </div>
  );
}

export default GameCard;

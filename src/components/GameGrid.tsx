
import { tyGameQuery } from "../pages/Home";
import useGame from "../UseHook/useGame";

import GameCard from "./GameCard";
import GameCradSkeleton from "./GameCradSkeleton";

type tyProps = {
  theme: boolean;
  seleteGameQuery: tyGameQuery;
};

function GameGrid({ theme, seleteGameQuery }: tyProps) {

    
  
  const { data, isLoading } = useGame(seleteGameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  


  return (
    <div className="">
     
      <div className="grid  lg:grid-cols-3 sm:grid-cols-2 gap-5 m-6 ">
        {isLoading && skeletons.map((i) => <GameCradSkeleton key={i} />)}
        {data?.slice(0, 9).map((item) => (
          <GameCard key={item.id} game={item} theme={theme} />
        ))}
      </div>
    </div>
  );
}

export default GameGrid;

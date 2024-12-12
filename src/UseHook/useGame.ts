import { tyGameQuery } from '../pages/Home'
import useData from "./useData";

export type tyPlatform = {
  id: number;
  name: string;
  slug: string;
};

export type tyGames = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: tyPlatform }[];
  metacritic: number;
};
const useGame = (seleteGameQuery: tyGameQuery) =>
  useData<tyGames>(
    "games",
    {
      params: {
        genres: seleteGameQuery.genre?.id,
        platforms: seleteGameQuery.platform?.id,
        ordering: seleteGameQuery.sortOrder?.value,
        search:seleteGameQuery?.search,
       
      },
    },
    [
      seleteGameQuery.genre?.name,
      seleteGameQuery.platform?.name,
      seleteGameQuery.sortOrder?.value,
      seleteGameQuery?.search,
    ]
  );

export default useGame;

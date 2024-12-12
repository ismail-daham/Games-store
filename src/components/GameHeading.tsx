import { tyGameQuery } from "../App";

type tyProps = {
  gameQuery: tyGameQuery;
};

function GameHeading({ gameQuery }: tyProps) {
  return (
    <div>
      {gameQuery ? (
        <div className="text-4xl mx-8 mt-3 font-medium">
          <span>{gameQuery.platform?.name } </span>
          <span>{gameQuery.genre?.name } </span>
          <span>Games</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GameHeading;

import useGener, { tyGenre } from "../UseHook/useGener";

type tyProps = {
  setSeleteGenre: (genre: tyGenre | null) => void;
  seleteGenre: tyGenre | null;
};
function Genres({ setSeleteGenre, seleteGenre }: tyProps) {
  const { data, isLoading ,error} = useGener();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14];


  
  return (

    <div className=" lg:px-8 p-3">
      <h1 className="text-3xl my-2 font-medium">Genres</h1>
      {isLoading &&
        skeletons.map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 my-2 max-md:w-56  animate-pulse"
          >
            <span className="w-9 h-9 rounded-md  bg-gray-800" />
            <h1 className="text-lg w-20 h-2 bg-gray-800"> </h1>
          </div>
        ))}
        {/* error maessage */}
        <h1 className="text-red-500">{}</h1>
     
      {data?.map((genre) => (
        <div
          key={genre.id}
          onClick={() => {
            genre.id == seleteGenre?.id
              ? setSeleteGenre(null)
              : setSeleteGenre(genre);
          }}
          className={`flex items-center gap-3 my-2 cursor-pointer w-fit duration-300 hover:scale-105 ${
            genre.id == seleteGenre?.id ? "font-semibold  underline" : ""
          }`}
        >
          <img
            src={genre.image_background}
            alt=""
            className="w-9 h-9 rounded-md"
          />
          <h1 className="text-lg"> {genre.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Genres;

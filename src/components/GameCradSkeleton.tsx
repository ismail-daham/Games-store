

export default function GameCradSkeleton() {
  return (
    <div>    <div
    className={` rounded-md  bg-gray-700 mx-auto duration-300 hover:scale-105 animate-pulse `}
  >
    <p  className=" h-56 rounded-t-md  bg-gray-800    " />
    <div className="p-5 space-y-4 w-80 ">
      <h1 className="text-2xl bg-gray-800 bg w-72 h-2"></h1>
      <div className="flex justify-between items-center ">
        <div className="flex gap-3 bg-gray-800  w-60 h-2">
       <span></span>
        </div>
        <h3 className={`  rounded-md bg-gray-800 w-10 h-2 `}></h3>
      </div>
    </div>
  </div></div>
  )
}


import useData from "./useData";



export type tyGenre={
  id: number;
  name: string;
  image_background: string;
}



const useGenre=()=>useData<tyGenre>("genres");

export default useGenre;



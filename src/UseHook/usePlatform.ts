import useData from "./useData";
import { tyPlatform } from "./useGame";


const usePlatform=()=>useData<tyPlatform>("platforms/lists/parents");

export default usePlatform;

import ApiClient from "../service/ApiClient";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

type tyFatchData<T> = {
  count: number;
  results: T[];
};

export default function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  item?:any
) {
  
return useQuery({
  queryKey:[endpoint+item],
  queryFn:()=>(
    ApiClient.get<tyFatchData<T>>(endpoint,{...requestConfig})
    .then(res=>res.data.results)
  )
  
})

}









// export default function useData<T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   daps?: any[]
// ) {
//   const [data, setData] = useState<T[]>([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);



//   useEffect(
//     () => {
//       setIsLoading(true);
//       const controller = new AbortController();
//       ApiClient.get<tyFatchData<T>>(endpoint, {
//         signal: controller.signal,
//         ...requestConfig,
//       })
//         .then((res) => {
//           setData(res.data.results), setIsLoading(false);
//         })
//         .catch((err) => {
//           if (err instanceof CanceledError) return;

//           setIsLoading(false);
//           setErrorMessage(err.message);
//         });
//     },
//     daps ? [...daps] : []
//   );

//   return { data, errorMessage, isLoading }
// }
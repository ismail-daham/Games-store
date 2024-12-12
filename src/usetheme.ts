import { useState } from "react"



const useTheme=()=>{
  const [theme, setTheme]=useState(true)

  return{theme,setTheme}
}

export default useTheme;
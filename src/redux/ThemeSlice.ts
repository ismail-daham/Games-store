import { createSlice } from "@reduxjs/toolkit"
import { tyGameQuery } from "../pages/Home"

export interface Tystate{
  theme:boolean
  action:tyGameQuery
}
const initialState={
  theme:false,
  seleteGameQuery:{} as tyGameQuery
}


const ThemeSlice=createSlice({
  name: 'theme',
  initialState,
  reducers:{
    setTheme2:(state,action)=>{
     
      state.seleteGameQuery={...state.seleteGameQuery,genre:action.payload }
      state.theme=action.payload
    }
  }
})

export const {setTheme2}=ThemeSlice.actions;

export default ThemeSlice.reducer;
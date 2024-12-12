
import Home from "./pages/Home";
import { Provider } from 'react-redux'
import Store from "./redux/Store";


function App() {
  
return(

<div>
  <Provider store={Store} >
  <Home/>

  </Provider>
</div>

)
}

export default App;

import './App.css'
import Home from "./pages/index"
import { GlobalContext } from './context'
import {RouterProvider} from "react-router-dom"
import {router} from "./routers"
// import Article from './components/Article'

function App() {
  /* Variable Set UP */
  /* Contoh Conditional Rendering */
  /* const value = false; */

  // const name = 'riski'

  /* Cara Mudah Untuk State Management Dengan UseContenxt */

  // const value = 'riski';

  /* Melempar data dan mengambil data */
  const user = {
    username: 'rival',
  };

  return (
    <div className="App">
        {/* <Article name="Riski" titles={["React JS", "NextJS", "NodeJs"]}/>
        <br />
        <Article name="Debi" titles={["Vue JS", "NuxtJS", "Deno"]}/> */}
         {/* {value ? 'benar' : 'salah'} */}
        
        <GlobalContext.Provider value={user} >

          <RouterProvider router={router} />

        </GlobalContext.Provider>
        
       
    </div>
  )
}

export default App

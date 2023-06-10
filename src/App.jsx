import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import User from "./pages/user/User"
import Hotel from "./pages/hotel/Hotel"
import Single from "./pages/single/Single"
import HotelSingle from "./pages/hotelsingle/HotelSingle"
import New from "./pages/new/New"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { productInputs, userInputs } from "./formSource"
import "./style/dark.scss"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"


function App() {
  const { darkMode } = useContext(DarkModeContext);
 
  return (
    <div className={darkMode ? "app dark" : "app"}>
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
          <Route index element={<User/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
          </Route>
          <Route path="hotels">
          <Route index element={<Hotel/>}/>
          <Route path=":hotelId" element={<HotelSingle/>}/>
          <Route path="new" element={<New inputs={productInputs} title="Add New Hotel"/>}/>
          </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

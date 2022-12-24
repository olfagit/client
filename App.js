import './App.css'
import Navigation from './components/Navigation'
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login.js"
import {Routes , Route} from "react-router-dom"
import CV from './pages/CV'

function App() {
  return (
    <div className="App">
<Navigation/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Profile" element={<Profile/>} />
  <Route path="/CV" element={<CV/>} />
  <Route path="/Login" element={<Login/>} />
  <Route path="/Register" element={<Register/>} />
</Routes>
    </div>
  )
}

export default App;

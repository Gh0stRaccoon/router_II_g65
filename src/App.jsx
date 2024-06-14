import { NavLink, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Characters from "./pages/Characters"
import "./index.css"
import Character from "./pages/Character"
import Login from "./pages/Login"
import { useContext } from "react"
import { UserContext } from "./context/User"

function App() {
  const { user } = useContext(UserContext)

  return (
    <>
      <nav>
        <ul>
          <li><NavLink className={({ isActive }) => (isActive ? "isActive" : null)} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "isActive" : null)} to="/personajes">Personajes</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "isActive" : null)} to="/login">Login</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={user ? <Characters /> : <Login />} />
        <Route path="/personaje/:id" element={<Character />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App

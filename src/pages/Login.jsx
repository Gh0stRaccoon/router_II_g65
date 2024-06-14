import { useContext } from "react"
import { UserContext } from "../context/User"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = formData.get("user")
        const password = formData.get("password")
        if (password === "123456" && user === "pepito") {
            setUser(() => {
                return { name: 'pepito', email: 'pepito@gmail.com' }
            })
            return navigate('/personajes')
        } else {
            navigate("/login")
        }


    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Ingresa tu usuario
                    <input name="user" type="text" />
                </label>
                <label>
                    Contraseña
                    <input name="password" type="password" />
                </label>
                <button>Ingresar</button>
            </form>
        </div>
    )
}

export default Login;
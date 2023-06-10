import './login.scss'
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          className="lInput"
        />
        <Link to="/">
        <button className="lButton">
          Login
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Login
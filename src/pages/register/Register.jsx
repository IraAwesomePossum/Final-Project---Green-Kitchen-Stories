import "./register.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="main">
        <p className="sign" align="center">
          Sign up
        </p>
        <form className="form1">
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          <button className="submit link" align="center">
            <Link className="link" to="/register">
              Sign up
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

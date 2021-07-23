import "./register.css";

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
          <button className="submit" align="center">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

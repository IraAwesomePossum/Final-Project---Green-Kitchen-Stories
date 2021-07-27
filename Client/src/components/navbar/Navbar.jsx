import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Navbar() {
  const { user } = useContext(Context);
  return (
    <div className="nav">
      <div className="topLeft">
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-tiktok"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={{ color: "inherit" }}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" style={{ color: "inherit" }}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" style={{ color: "inherit" }}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/create " style={{ color: "inherit" }}>
              CREATE A POST
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt="woman"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" style={{ color: "inherit" }}>
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" style={{ color: "inherit" }}>
                SIGN UP
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

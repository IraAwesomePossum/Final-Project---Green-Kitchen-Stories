import "./sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      console.log(res.data);
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img
              src="https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt="face"
            />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>ABOUT ME</h3>
        <div>
          <p>
            Incurable food nerd. Travel fan. Zombie fanatic. Twitter ninja. Tv
            advocate. Music enthusiast.
          </p>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to={`/?cat=${c.name}`}
              >
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-facebook-f"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            <i className="sidebarIcon fab fa-tiktok"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./sidebar.css";

export default function Sidebar() {
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
            <li className="sidebarListItem">NO TIME, NO MONEY</li>
            <li className="sidebarListItem">COOKING FOR MYSELF</li>
            <li className="sidebarListItem">FAMILY COOKING</li>
            <li className="sidebarListItem">TREAT YOSELF</li>
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

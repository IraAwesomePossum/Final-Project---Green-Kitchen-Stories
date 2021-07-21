import "./navbar.css";

export default function Navbar() {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACTS</li>
          <li className="topListItem">CREATE POST</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="woman"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

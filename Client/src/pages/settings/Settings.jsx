import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return <div className="settings">
  <div className="settingsWrapper">
  <div className="settingsTitle">
  
  <span className="settingsUpdateTitle">Update Account
  </span>
  <span className="settingsDeleteTitle">Delete Account
  </span>
  </div>
  <form className="settingsForm">  
  <label>Profile Image</label>
  <div className="settingsImage">
   <img src="https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt="face"/>
              <label htmlFor="fileInput">
              <i className="settingsProfileIcon far fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display: "none"}}/>
  </div>
  <label>Username</label>
<input type="text" placeholder="Anna"/>
  <label>Email</label>
<input type="email" placeholder="anna@gmail.com"/>
  <label>Password</label>
<input type="password"/>
<button className="settingsSubmit">Update</button>
  </form>
  </div>
  <Sidebar/>
  </div>;
}

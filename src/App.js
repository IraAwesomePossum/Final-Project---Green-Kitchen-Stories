import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Create from "./pages/create/Create";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Create /> */}
      {/* <Settings/> */}
      {/* <Login /> */}
      <Register />
    </Router>
  );
}

export default App;

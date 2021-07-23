import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Create from "./pages/create/Create";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Create /> */}
      {/* <Settings/> */}
      <Login />
    </div>
  );
}

export default App;

import Login from "./Authentications/Login";
import Signup from "./Authentications/Signup";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routings/AllRoutes";

export default function App() {
  return (
    <h1 className="bg-dil-dbg h-[100vh]">
    <Navbar/>
    <AllRoutes/>
    </h1>
  )
}
import { Navigate } from "react-router-dom";
import Login from "./Authentications/Login";
import Signup from "./Authentications/Signup";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import AllRoutes from "./Routings/AllRoutes";

export default function App() {
  

  return (
    <div>
      <Navbar />
      {/* <Sidebar/> */}
      <div className="mt-10 lg:mt-20 md:mt-10">
        <AllRoutes />
      </div>
      <Footer />
      
    </div>
  );
}

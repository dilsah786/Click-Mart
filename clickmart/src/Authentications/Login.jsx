import React, { useState } from "react";
import bgImage from "../assets/bg-2.png";
import { Link, Navigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    try {
      const result = await fetch(`http://localhost:8080/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await result.json();
      console.log(res);
      setMessage(res.message)
      setToken(res.token);
      localStorage.setItem("authToken",JSON.stringify(res.token))
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if(token){
    return <Navigate to="/"/>
  }else{
    <Navigate to="/signup"/>
  }
  


  return (
    <div className="flex flex-col justify-center items-center h-screen border lg:mt-16 mt-10">
      <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center border p-4 gap-4 shadow-xl lg:-mt-40">
        <div>
          <img
            src={bgImage}
            className="h-72 w-72 lg:w-96 lg:h-96 md:w-96 md:h-96"
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label className="text-2xl font-semibold mb-2">Email</label>
              <input
                value={formData.email}
                name="email"
                onChange={handleInput}
                className="p-2 rounded-lg w-72 lg:w-96 md:w-96 border-2  cursor-text"
                placeholder="xyz@gmail.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-2xl font-semibold mb-2">Password</label>
              <input
                value={formData.password}
                name="password"
                type="password"
                onChange={handleInput}
                className="p-2 rounded-lg w-72 lg:w-96 md:w-96 border-2"
                placeholder="xyz@123"
              />
            </div>
            <div className="pt-6 pb-10">
              <input
                type="submit"
                value={loading ? "Logging in..." : "Login"}
                className={`bg-blue-600 p-2 flex justify-center m-auto mb-2 rounded px-4 w-32 text-white ${
                  loading
                    ? "cursor-not-allowed"
                    : "hover:scale-110 transition-all cursor-pointer hover:text-[18px]"
                }`}
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-row gap-4 lg:-mt-16 lg:ml-[25rem]  -mt-12">
      <h1>New user ?</h1>
      <button className="text-blue-600 underline"><Link to="/signup"> Singup here </Link> </button>
      </div>
      
    </div>
  );
};

export default Login;

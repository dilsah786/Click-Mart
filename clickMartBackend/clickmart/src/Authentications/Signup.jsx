import React, { useState } from "react";
import bgImage from "../assets/bg-2.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //   const apiUrl = import.meta.env.VITE_API_URL;

  //   console.log(apiUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await fetch(`http://localhost:8080/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await result.json();
      console.log(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-10 pt-10" >
      <div className="flex flex-col justify-center items-center  lg:mt-10 lg:mb-10 md:mt-16">
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center border p-4 gap-4 shadow-xl mt-10 lg:mt-4 md:mt-4">
          <div>
            <img
              src={bgImage}
              className="h-72 w-72 lg:w-[30rem] lg:h-[35rem] md:w-96 md:h-[35rem] "
            />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4">
                <label className="text-xl font-semibold mb-2">First Name</label>
                <input
                  value={formData.firstName}
                  name="firstName"
                  onChange={handleInput}
                  className="p-2 rounded-lg w-72 lg:w-96 md:w-96 border-2  cursor-text"
                  placeholder="FirstName"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-xl font-semibold mb-2">Last Name</label>
                <input
                  value={formData.lastName}
                  name="lastName"
                  onChange={handleInput}
                  className="p-2 rounded-lg w-72 lg:w-96 md:w-96 border-2  cursor-text"
                  placeholder="LastName"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-xl font-semibold mb-2">Email</label>
                <input
                  value={formData.email}
                  name="email"
                  onChange={handleInput}
                  className="p-2 rounded-lg w-72 lg:w-96 md:w-96 border-2  cursor-text"
                  placeholder="xyz@gmail.com"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-xl font-semibold mb-2">Password</label>
                <input
                  value={formData.password}
                  name="password"
                  type="password"
                  onChange={handleInput}
                  className="p-2 rounded-lg w-72 lg:w-96 md:w-96 border-2  cursor-text"
                  placeholder="xyz@1234"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xl font-semibold mb-2">
                  Confirm Password
                </label>
                <input
                  value={formData.confirmPassword}
                  name="confirmPassword"
                  type="password"
                  onChange={handleInput}
                  className="p-2 rounded-lg w-72 lg:w-96 md:w-96 border-2"
                  placeholder="xyz@1234"
                />
              </div>
              <div className="pt-4 pb-8">
                <input
                  type="submit"
                  value={loading ? "Logging in..." : "Signup"}
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
        <div className="flex flex-row gap-4 lg:-mt-10 lg:ml-[30rem] md:ml-[24rem]  -mt-10 ">
          <h1>Already a user ?</h1>
          <button className="text-blue-600 underline">
            <Link to="/login"> Login here </Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

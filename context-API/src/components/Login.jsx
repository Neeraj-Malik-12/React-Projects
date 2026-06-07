import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import bgImage from "../assets/Pexel 4.webp";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <>
      <div className=" flex flex-col items-center min-h-screen bg-cover bg-no-repeat bg-center"
      style={{backgroundImage : `url(${bgImage})`}}
      >
        <h2 className=" flex justify-center items-center sticky top-2 bg-white/5 backdrop-blur-xs border border-white rounded-xl shadow-2xl p-6 h-15 w-99/100 ">
          Login Here
        </h2>

        <div className="bg-white/5 shadow-2xl shadow-blue-700 w-1/2 m-10 p-10 rounded-2xl flex flex-col text-left font-bold font-serif text-xl text-white ring ring-blue-400">

          <label>Name : </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="username"
            className="bg-white p-2 rounded-xl shadow-2xl ring-2 ring-gray-700 mt-1 text-black"
          ></input>

          <br />

          <label> Password : </label>
          <input
            type="number"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            className="bg-white p-2 rounded-xl shadow-2xl ring-2 ring-gray-700 mt-1 text-black"
          ></input>

          <br />

          <button onClick={handleSubmit} className="bg-blue-700 p-2 rounded-xl shadow-2xl cursor-pointer">Submit</button>
        </div>

        
        
        
      </div>
    </>
  );
}

export default Login;

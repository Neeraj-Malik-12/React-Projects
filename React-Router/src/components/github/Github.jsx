import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {


    const data = useLoaderData()


//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Neeraj-Malik-12")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <>
      <div className="flex bg-orange-900 p-10 items-center justify-between text-white font-bold font-serif text-2xl">
        <img src={data.avatar_url} className="h-80 m-10 rounded-2xl shadow-orange-300 shadow-2xl  ring-2" alt="userImage"></img>
        <div className="text-center w-100 m-5">
          Github Followers : {data.followers}
        </div>
        <div className="text-center w-100">
          Github Repos : {data.public_repos}
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/Neeraj-Malik-12")
    return response.json()
}

import React from 'react'
import { useNavigate } from "react-router-dom";
const Genre = ({genre}) => {
 const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/${genre}`)}
        className="border-4 border-gray-700 w-32  lg:w-52 h-32 flex justify-center items-center
        shadow-lg rounded-lg    cursor-pointer hover:scale-105 transition-all ">
           <p className="text-white text-2xl uppercase font-semibold">{genre}</p>
        </div>
  )
}

export default Genre
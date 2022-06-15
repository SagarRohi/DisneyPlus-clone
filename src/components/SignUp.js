import Header from "./Header";
import { useState } from "react";
import { auth } from "../firebase";
const SignUp=()=>{

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const handleClick=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((data)=>{
               return data.user.updateProfile({
                   displayName:name,
               })
     })
    }
    return<div>
        <Header/>
        <div className="bg-main flex justify-center items-center w-screen h-screen">
        <form className="flex flex-col bg-main md:w-1/3 ">
        <input onChange={(e)=>setName(e.target.value)}  type='text' placeholder="Name"
         className="bg-main text-white border-b-2 my-4 text-xl px-4 py-2 outline-none"/>
        <input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder="Email" className="bg-main text-white border-b-2 my-4 text-xl px-4 py-2 outline-none"/>
        <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder="password" className="bg-main text-white border-b-2 my-4 text-xl px-4 py-2 outline-none"/>
        <button onClick={handleClick} className="text-white px-4 py-2 border-2 cursor-pointer mt-4 hover:bg-white hover:text-main">Sign Up</button>
    </form>
    </div>
    </div>
}


export default SignUp;
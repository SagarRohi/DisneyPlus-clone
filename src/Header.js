import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { setUser, unSetUser } from './toolkit';
import {useNavigate,Link} from 'react-router-dom';
import { provider } from './firebase';

const Header=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const userName=useSelector((state)=>state.name);
    let photoUrl=useSelector((state)=>state.photo);
    const signInWithGoogle=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            let user=result.user;
            let {displayName,email,photoURL} =user;
            if(!photoURL) photoURL='/images/avatar.webp';
            dispatch(setUser({displayName,email,photoURL}));
        });
    }
    const signOut=()=>{
        auth.signOut();
        dispatch(unSetUser());
    }
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
               if(user){
                    let {displayName,email,photoURL} =user;
                    if(!photoURL) photoURL='/images/avatar.webp';
                    dispatch(setUser({displayName,email,photoURL}));
                  if(window.location.pathname==='/'||window.location.pathname==='/signup') navigate('/home');
               }
               else if(window.location.pathname!=='/signup') navigate('/');
        })
    },[])
    console.log(userName,photoUrl);
    return <div className="fixed bg-secondary w-full px-2 lg:px-12 py-2 flex z-10 items-center">
           <img src="./images/logo.svg" alt="logo"
           className="w-24 "/>
           {userName&&<ul className="hidden lg:block  lg:flex space-x-4 text-white ml-12">
            <li className="flex space-x-1 items-center py-1">
                <img className="w-6" src="./images/home-icon.svg" alt="icon"/>
                <p className="uppercase text-sm tracking-wider cursor-pointer
                after:block after:border-b-2 after:scale-x-0  after:origin-left	 after:duration-200	
                after:ease-in-out hover:after:scale-x-100 after:border-white after:-inset-1">Home</p>
            </li>
            <li className="flex space-x-1 items-center  py-1">
                <img className="w-6" src="./images/search-icon.svg" alt="icon"/>
                <p className="uppercase text-sm tracking-wider cursor-pointer
                after:block after:border-b-2 after:scale-x-0  after:origin-left	 after:duration-200	
                after:ease-in-out hover:after:scale-x-100 after:border-white after:-inset-1">search</p>
            </li>
            <li className="flex space-x-1 items-center  py-1">
                <img className="w-6" src="./images/watchlist-icon.svg" alt="icon"/>
                <p className="uppercase text-sm tracking-wider cursor-pointer
                after:block after:border-b-2 after:scale-x-0  after:origin-left	 after:duration-200	
                after:ease-in-out hover:after:scale-x-100 after:border-white after:-inset-1">watchlist</p>
            </li>
            <li className="flex space-x-1 items-center  py-1">
                <img className="w-6" src="./images/original-icon.svg" alt="icon"/>
                <p className="uppercase text-sm tracking-wider cursor-pointer
                after:block after:border-b-2 after:scale-x-0  after:origin-left	 after:duration-200	
                after:ease-in-out hover:after:scale-x-100 after:border-white after:-inset-1">originals</p>
            </li>
            <li className="flex space-x-1 items-center  py-1">
                <img className="w-6" src="./images/movie-icon.svg" alt="icon"/>
                <p className="uppercase text-sm tracking-wider cursor-pointer
                after:block after:border-b-2 after:scale-x-0  after:origin-left	 after:duration-200	
                after:ease-in-out hover:after:scale-x-100 after:border-white after:-inset-1 ">movies</p>
            </li> 
            <li className="flex space-x-1 items-center  py-1">
                <img className="w-6" src="./images/series-icon.svg" alt="icon"/>
                <p className="uppercase text-sm tracking-wider cursor-pointer 
                after:block after:border-b-2 after:scale-x-0  after:origin-left	 after:duration-200	
                after:ease-in-out hover:after:scale-x-100 after:border-white after:-inset-1 ">series</p>
            </li>
           </ul>}
           {userName?
           <div className='flex space-x-2 ml-auto'>
               <button onClick={signOut}
                className="ml-auto uppercase text-white border-2 border-white 
                px-2 md:px-6 lg:px-6 py-1 tracking-widest shadow-lg bg-slate-900
               rounded hover:bg-white hover:text-slate-900">Log Out</button>
               <img className='w-10 h-10 rounded-full ' src={photoUrl} alt="logo"/>
            </div>:<div className='ml-auto flex gap-2 '>
            <img onClick={signInWithGoogle} src='./images/google.png' className='w-12 rounded cursor-pointer'/>
           <Link to='/signup'
           className=" uppercase text-white border-2 border-white flex items-center
           px-2 md:px-6 lg:px-6 py-1 tracking-widest shadow-lg bg-slate-900
            rounded hover:bg-white hover:text-slate-900">Login</Link></div>}
    </div>
}

export default Header;
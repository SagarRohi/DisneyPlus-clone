import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { setMobileSearchShow, setDeskTopSearchShow,setUser, unSetUser } from '../toolkit';
import {useNavigate,Link} from 'react-router-dom';
import { provider } from '../firebase';
import {MdSearch} from 'react-icons/md';
import {motion} from 'framer-motion';
const Header=()=>{
    const [searchResult,setSearchResult]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [search,setSearch]=useState('');
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const mobileSearchShow=useSelector((state)=>state.mobileSearchShow);
    const deskTopSearchShow=useSelector((state)=>state.deskTopSearchShow);
    const [searchShow,setSearchShow]=useState(mobileSearchShow);
    const [showMenu,setShowMenu]=useState(false);
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

     useEffect(()=>{
        if(!deskTopSearchShow) setShowResult(false);
     },[deskTopSearchShow])
    useEffect(()=>{
        setSearchShow(mobileSearchShow);
        if(!mobileSearchShow) setShowResult(false);
    },[mobileSearchShow])

    const signOut=()=>{
        auth.signOut();
        dispatch(unSetUser());
    }
    
    const searchMovie=()=>{
        if(!search) return;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7a2a30724470ebf691cd1bddcb3f08ff&query=${search}`).then((data)=>{
            return data.json();
        }).then((data)=>{
            let results=data.results;
            results.sort(function(a,b){
                return new Date(b.release_date) - new Date(a.release_date);
            });
            const date="2010-01-01";
            results=results.filter((result)=>new Date(result.release_date)>=new Date(date)&&result.poster_path);
            setSearchResult(results);
        })
    }
    useEffect(()=>{
        if(search.length==0) setShowResult(false);
        else if(!showResult) setShowResult(true);
    },[search]);
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

    const menus=[{title:"Home",img :"./images/home-icon.svg"},
    {title:"WatchList",img :"./images/watchlist-icon.svg"},
    {title:"Series",img :"./images/series-icon.svg"},
    {title:"Originals",img :"./images/original-icon.svg"},
    {title:"Movies",img :"./images/movie-icon.svg"}];


    const Menu=({title,img})=>{
        return  <li className="flex space-x-1 items-center py-1">
        <img className="w-6" src={img} alt="icon"/>
        <p  onClick={()=>navigate('/home')}
        className="uppercase text-sm tracking-wider cursor-pointer
        after:block after:border-b-2 after:scale-x-0  after:origin-left	 after:duration-200	
        after:ease-in-out hover:after:scale-x-100 after:border-white after:-inset-1">{title}</p>
    </li>
    }
    return <div className="fixed bg-secondary w-full px-2 lg:px-12 py-9 flex z-10 items-center h-16 ">
           <img src="./images/logo.svg" alt="logo"
           className="w-24 hidden lg:block"/>

           {!searchShow&&<motion.img 
           initial={{scale:0.5}}
           animate={{scale:1}}
           exit={{scale:0.5}}
           src="./images/logo.svg" alt="logo"
           className="w-24 block lg:hidden"/>}

           {userName&&<ul className="hidden   lg:flex space-x-4 text-white ml-12">

            {menus.map((menu ,id)=>{
                return <Menu title={menu.title} img={menu.img} id={id}/>
            })}
           </ul>}
           {userName?
           <div className='flex space-x-2 ml-auto items-center relative lg:w-80 gap-2'>
              {searchShow&& <motion.div 
              initial={{scaleX:0.3}}
              animate={{scaleX:1}}
              exirt={{scaleX:0.3}}
              
              className='flex bg-white items-center rounded-md flex-1 '>
                { <input  onChange={(e)=>{
                    setSearch(e.target.value);
                    searchMovie();
                 }} value={search}  type='text' className='px-2 py-1 outline-none border-none rounded-md flex-1 ' placeholder='Search' />}
                 <MdSearch  className='text-3xl cursor-pointer'/>
               </motion.div>}

              {!searchShow&& <MdSearch onClick={()=>{
                setSearchShow(true);
                if(!mobileSearchShow) dispatch(setMobileSearchShow(true));
              }}  className='text-3xl  md:hidden text-white cursor-pointer'/>}
               <div className='hidden md:flex bg-white items-center rounded-md flex-1 '>
                 <input onChange={(e)=>{
                    setSearch(e.target.value);
                    searchMovie();
                    if(!deskTopSearchShow) dispatch(setDeskTopSearchShow(true));
                 }} value={search}  type='text' className='px-2 py-1 outline-none border-none rounded-md flex-1 ' placeholder='Search' />
                 <MdSearch  className='text-3xl cursor-pointer'/>
               </div>

                 {showResult&&<div className=' absolute top-12 -left-8 -right-1 md:right-0  lg:-left-2 h-80 overflow-y-scroll  screen md:w-full bg-slate-900 shadow-md shadow-gray-800 p-2 flex flex-col gap-2 items-center'>
                    {searchResult.map((movie,id)=>{
                        return <Link to={`/${movie.id}`} key={id} className='max-h-24 flex gap-2 w-full bg-main p-2 px-4 rounded-md cursor-pointer items-center'>
                        <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} className='h-20 w-20 object-contain' alt="hi"/>
                        <div className='flex-1 leading-3'>
                            <p className='text-white text-md leading-4 mb-1'>{movie.title}</p>
                            <p className='text-white text-md'><span className='text-sm mr-2 text-red-700'>
                                Release :</span>{movie.release_date}</p>
                                <p className='text-white text-md' ><span className='mr-2 text-red-700 text-sm'>Language :</span>{movie.original_language}</p>
                        </div>
                    </Link>
                    })}
                 </div>}

              <div>
              <motion.img 
              whileTap={{scale:0.75}}
              onClick={()=>setShowMenu(!showMenu)} className='w-10 h-10 rounded-full relative' src={photoUrl} alt="logo"/>
               {showMenu&&<button  onClick={signOut}
                className="ml-auto absolute top-12 right-0 w-max  uppercase  text-white border-2 border-white 
                px-2 md:px-6 lg:px-6 py-1 tracking-widest shadow-lg bg-slate-900
               rounded hover:bg-white hover:text-slate-900">Log Out</button>}
              </div>
            </div>:<div className='ml-auto flex gap-2 '>
            <img onClick={signInWithGoogle} src='./images/google.png' className='w-12 rounded cursor-pointer'/>
           <Link to='/signup'
           className=" uppercase text-white border-2 border-white flex items-center
           px-2 md:px-6 lg:px-6 py-1 tracking-widest shadow-lg bg-slate-900
            rounded hover:bg-white hover:text-slate-900">Login</Link></div>}
    </div>
}

export default Header;
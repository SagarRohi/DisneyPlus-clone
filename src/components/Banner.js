import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
import styled from 'styled-components';
import Header from "./Header";
import {useNavigate} from 'react-router-dom';

const Player=({trailer})=>{
  return<>{trailer? <div className='player-wrapper w-full flex   h-full'>
    <div className=" w-full h-2/6 md:h-full">
  <ReactPlayer
    className='react-player'
    url={`https://www.youtube.com/watch?v=${trailer.key}`}
    width='100%'
    height='100%'
    controls
    />
  </div>
</div>:<div className=" flex justify-center items-center h-full flex-col text-3xl text-white">
  <p>Oops!!</p>
  <p>Trailer Not Found!!</p>
  </div>}</>

}

const BigPlayer=({trailer})=>{
  return<>{trailer? <div className='player-wrapper w-full flex   h-full'>
  <div className=" w-full h-2/6 md:h-full">
<ReactPlayer
  className='react-player'
  url={`https://www.youtube.com/watch?v=${trailer.key}`}
  width='100%'
  height='100%'
  controls
  />
</div>
</div>:<div className=" flex justify-center items-center h-full flex-col text-3xl text-white">
<p>Oops!!</p>
<p>Trailer Not Found!!</p>
</div>}</>
}
const Banner=()=>{
   
  const navigate=useNavigate();
  const [movie,setMovie]=useState();
  const {id}=useParams();
  const [play,setPlay]=useState(false);
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7a2a30724470ebf691cd1bddcb3f08ff&language=en-US&append_to_response=videos`).then((data)=>{
        return data.json();
      }).then((data)=>{
        if(data.success==false) setMovie(null);
        else setMovie(data);
      })
  },[])
  let trailer=null;
  if(movie&&movie.videos) trailer=movie?movie.videos.results.find(vid=>vid.name==='Official Trailer'||vid.name==='Teaser Trailer'):null;
  return <>

  {/*mobile View */}
  <div className="md:hidden flex flex-col overflow-y-scroll h-screen   overflow-hidden relative">
    {movie&& <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
    className='-z-10 brightness-50 w-full h-[38%]  object-cover' alt="hi"/>}
     <button onClick={()=>navigate(-1)} className="text-white absolute  border-2 m-1 px-4 py-1 left-1 top-1 ">Back</button>
      {movie&&<div movie={movie} className="flex items-start  z-5 flex-1 bg-main lg:bg-transparent py-4 lg:py-0 ">
       { play?
       <div className=" w-full relative flex-1 lg:h-[70%] ">
          <p className="m-4 text-white text-2xl sm:text-3xl md:text-5xl  font-lg ">{movie.title}</p>
          <BigPlayer trailer={trailer} />
        <div className="mt-5 px-2">
          <p className="text-white text-md"><span className="text-red-800 mr-4">Release :</span>{movie.release_date}</p>
          <p className="text-white text-md"><span className="text-red-800 mr-4">Country :</span>{movie?.production_countries[0]?.iso_3166_1}</p>
          <p className="text-white text-md"><span className="text-red-800 mr-4">Tagline </span>{movie.tagline}</p>
        </div>
         <button  onClick={()=>setPlay(false)}
           className="absolute 
           mt-2 right-4 z-10 text-white w-max border-2 border-white px-4 py-2 bg-slate-700 shadow-md 
           shadow-gray-800">Close</button></div>:
         <div className="flex flex-col gap-3 justify-center px-2 md:px-16  ">
          <p className="text-white text-4xl sm:text-3xl md:text-5xl  font-lg">{movie.title}</p>
          <p className="text-white text-md md:w-2/4">{movie.overview}</p>
          <p className="text-white text-md"><span className="text-red-800 mr-4">Release :</span>{movie.release_date}</p>
          <p className="text-white text-md"><span className="text-red-800 mr-4">Country :</span>{movie?.production_countries[0]?.iso_3166_1}</p>
          <p className="text-white text-md"><span className="text-red-800 mr-4">Tagline </span>{movie.tagline}</p>
          <button onClick={()=>setPlay(true)}
           className="text-white w-max border-2 border-white px-4 py-2 bg-slate-700 shadow-md shadow-gray-800">Play Trailer</button>
        </div>
        }
      </div>}
  </div>
  

  {/*desktop */}

  <div className="hidden md:block h-screen  overflow-hidden">
      {movie&&<div movie={movie} className="h-screen flex items-center">
      <button onClick={()=>navigate(-1)} className="text-white absolute  border-2 m-1 px-4 py-1 left-1 top-1 ">Back</button>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
        className=" absolute -z-10 h-full w-full object-cover brightness-75" alt="hi"/>
       { play?
       <div className="h-full w-full relative">
         <Player trailer={trailer}/>
         <button  onClick={()=>setPlay(false)}
           className="absolute 
           bottom-16 right-4 z-10 text-white w-max border-2 border-white px-4 py-2 bg-slate-700 shadow-md 
           shadow-gray-800">Close</button></div>:
         <div className="flex flex-col gap-4 justify-center px-2 md:px-16">
          <p className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-lg">{movie.title}</p>
          <p className="text-white text-md md:w-2/4">{movie.overview}</p>
          <p className="text-white text-md"><span className="text-red-500 mr-4">Release :</span>{movie.release_date}</p>
          <p className="text-white text-md"><span className="text-red-500 mr-4">Country :</span>{movie.production_countries[0].iso_3166_1}</p>
          <p className="text-white text-md"><span className="text-red-500 mr-4">Tagline </span>{movie.tagline}</p>
          <button onClick={()=>setPlay(true)}
           className="text-white w-max border-2 border-white px-4 py-2 bg-slate-700 shadow-md shadow-gray-800">Play Trailer</button>
        </div>
        }
      </div>}
  </div>
    
  
  </>
}


export default Banner;
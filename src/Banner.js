import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
import styled from 'styled-components';
import Header from "./Header";


const Player=({trailer})=>{
  return  <div className='player-wrapper w-full flex items-center  h-full'>
    <div className=" w-full h-2/6 md:h-full">
  <ReactPlayer
    className='react-player'
    url={`https://www.youtube.com/watch?v=${trailer.key}`}
    width='100%'
    height='100%'
    controls
  />
  </div>
</div>
}
const Banner=()=>{

  const [movie,setMovie]=useState();
  const {id}=useParams();
  const [play,setPlay]=useState(false);
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7a2a30724470ebf691cd1bddcb3f08ff&language=en-US&append_to_response=videos`).then((data)=>{
        return data.json();
      }).then((data)=>{
        console.log(data);
        if(data.success==false) setMovie(null);
        else setMovie(data);
      })
  },[])
  const  trailer=movie?movie.videos.results.find(vid=>vid.name==='Official Trailer'||vid.name==='Teaser Trailer'):null;
  return <div className="h-screen bg-main overflow-hidden">
    <div className="hidden md:block">
    <Header/>
    </div>
    <p className="md:h-16"></p>
      {movie&&<Component movie={movie} className="h-screen flex items-center">
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
      </Component>}
  </div>
}
const Component = styled.div`
  color: grey;
  ${({movie})=>movie&&`background:url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`};
  background-position:center;
  background-repeat: no-repeat;
  background-size:cover;
`;

export default Banner;
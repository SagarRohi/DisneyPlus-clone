
import { useEffect ,useState} from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Comedy=()=>{
    const [movies,setMovies]=useState([]);
    const [page,setPage]=useState(1);
    useEffect(()=>{
               fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7a2a30724470ebf691cd1bddcb3f08ff&with_genres=35&page=${page}`).then((data)=>{
                   return data.json();
               }).then((data)=>{
                   setMovies([...movies ,...data.results]);
               })
    },[page])
    return <div>
        <Header/>
        <div className="bg-main">
            <p className='h-24'></p>
            <p className="uppercase mx-8   text-xl text-white font-semibold">Comedy</p>
            <div className="flex flex-wrap mx-8 my-8  justify-between gap-y-12 gap-6">
            {movies.map((movie)=>{
                 return <div className="sm:w-[12%] w-2/5 shadow-md shadow-shadow border-gray-700  border-4 rounded cursor-pointer" >
                    <Link to={`/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} 
                    className='w-full h-full object-cover' alt='movie'/></Link>
                </div>
            })}
            </div>
            <button className='border-2 border-white ml-auto block w-max mx-8 text-white px-4 py-2'
            onClick={()=>setPage(page+1)}>More</button>
        <p className="h-4"></p>
       </div>
    </div>
}


export default Comedy;
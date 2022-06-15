import { useEffect ,useState} from "react";
import RowContainer from "./RowContainer";
const TopRated=()=>{
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=7a2a30724470ebf691cd1bddcb3f08ff&with_genres=878&page=1').then((data)=>{
      return data.json();
    }).then((data)=>{
      setMovies(data.results);
    })
  },[])
  
  
  return <RowContainer movies={movies} desc="Top Rated"/>
}
export default TopRated;
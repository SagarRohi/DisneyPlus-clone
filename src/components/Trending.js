import { useEffect ,useState} from "react";
import RowContainer from "./RowContainer";
const Trending=()=>{
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
            fetch('https://api.themoviedb.org/3/trending/all/day?api_key=7a2a30724470ebf691cd1bddcb3f08ff').then((data)=>{
                return data.json();
            }).then((data)=>{
                setMovies(data.results);
            })
    },[])

    
    return <RowContainer movies={movies} desc="Trending"/>
}


export default Trending;
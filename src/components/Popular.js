import { useEffect ,useState} from "react";
import RowContainer from "./RowContainer";
const Popular=()=>{
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=7a2a30724470ebf691cd1bddcb3f08ff&language=en-US&page=1').then((data)=>{
                return data.json();
            }).then((data)=>{
                setMovies(data.results);
            })
    },[])
    
    return <RowContainer movies={movies} desc="Popular"/>
}


export default Popular;
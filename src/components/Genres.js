
import { useNavigate } from "react-router-dom";
import Genre from "./Genre";
const allGenres=["Comedy","Action","Horror","Thriller","Family"];
const Genres=()=>{
    const navigate=useNavigate();
    return <div className="mt-12 w-full flex-wrap justify-between flex gap-8 px-2  ">
        
        {allGenres.map((genre,id)=><Genre genre={genre} key={id}/>)}
        
    </div>
}

export default Genres;
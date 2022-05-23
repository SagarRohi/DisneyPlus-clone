
import { useNavigate } from "react-router-dom";

const Genres=()=>{
    const navigate=useNavigate();
    return <div className="mt-12  grid  sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5  gap-4">
        <div onClick={()=>navigate('/comedy')}
        className="border-4 border-gray-700 shadow-lg
         shadow-shadow rounded-lg   group cursor-pointer hover:scale-105 transition-all">
           <p className="text-white flex justify-center items-center p-20 
           text-3xl uppercase font-semibold">Comedy</p>
        </div>
        <div onClick={()=>navigate('/action')}
        className="border-4 border-gray-700 shadow-lg
         shadow-shadow rounded-lg   cursor-pointer group hover:scale-105 transition-all">
              <p className="text-white flex justify-center items-center h-full text-3xl uppercase font-semibold p-20">Action</p>
        </div>
        <div onClick={()=>navigate('/horror')}
        className="border-4 border-gray-700 shadow-lg
         shadow-shadow rounded-lg    cursor-pointer group hover:scale-105 transition-all">
             <p className="text-white flex justify-center items-center h-full text-3xl uppercase font-semibold p-20">Horror</p>
        </div>
        <div onClick={()=>navigate('/thriller')}
        className="border-4 border-gray-700 shadow-lg
         shadow-shadow rounded-lg    cursor-pointer group hover:scale-105 transition-all">
             <p className="text-white flex justify-center items-center h-full text-3xl uppercase font-semibold p-20">Thriller</p> 
        </div>
        <div onClick={()=>navigate('/family')}
        className="border-4 border-gray-700 shadow-lg 
         shadow-shadow rounded-lg   cursor-pointer group hover:scale-105 transition-all">
             <p className="text-white flex justify-center items-center h-full text-3xl uppercase font-semibold p-20">Family</p> 
        </div>
        
    </div>
}

export default Genres;

// flex md:flex-row flex-col  justify-between gap-16 md:h-36

const Viewers=()=>{
    return <div className="mt-12  grid  sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 min-h-52 gap-4 ">
        <div className="border-4 border-gray-700 shadow-lg 
         shadow-shadow rounded-lg w-full relative h-full group cursor-pointer hover:scale-105 transition-all">
            <img src='./images/viewers-disney.png' alt="viewers" className="hover:z-10 absolute object-cover w-full h-full "/>
            <video autoPlay={true} loop={true} playsInline={true} muted className=" opacity-0 w-full h-full group-hover:opacity-100 
             h-full object-cover z-0 ">
                <source src="./videos/1564674844-disney.mp4" type='video/mp4'/>
            </video>
        </div>
        <div className="border-4 border-gray-700 shadow-lg
         shadow-shadow rounded-lg  w-full relative h-full cursor-pointer group hover:scale-105 transition-all">
            <img src='./images/viewers-marvel.png' alt="viewers" className="hover:z-10 absolute object-cover w-full h-full"/>
            <video autoPlay={true} loop={true} playsInline={true} muted className="opacity-0  w-full group-hover:opacity-100 h-full object-cover z-0 ">
                <source src="./videos/1564676115-marvel.mp4" type='video/mp4'/>
            </video>
        </div>
        <div className="border-4 border-gray-700 shadow-lg
         shadow-shadow rounded-lg w-full relative h-full cursor-pointer group hover:scale-105 transition-all">
            <img src='./images/viewers-national.png' alt="viewers" className="hover:z-10 absolute object-cover w-full h-full"/>
            <video autoPlay={true} loop={true} playsInline={true} muted className="opacity-0 group-hover:opacity-100 w-full h-full object-cover z-0 ">
                <source src="./videos/1564676296-national-geographic.mp4" type='video/mp4'/>
            </video>
        </div>
        <div className="border-4 border-gray-700 shadow-lg
         shadow-shadow rounded-lg  w-full relative h-full cursor-pointer group hover:scale-105 transition-all">
            <img src='./images/viewers-pixar.png' alt="viewers" className="hover:z-10 absolute object-cover w-full h-full"/>
            <video autoPlay={true} loop={true} playsInline={true} muted className="opacity-0 w-full group-hover:opacity-100 h-full object-cover z-0 ">
                <source src="./videos/1564676714-pixar.mp4" type='video/mp4'/>
            </video>
        </div>
        <div className="border-4 border-gray-700 shadow-lg 
         shadow-shadow rounded-lg  w-full relative h-full cursor-pointer group hover:scale-105 transition-all">
            <img src='./images/viewers-starwars.png' alt="viewers" className="hover:z-10 absolute object-cover w-full h-full"/>
            <video autoPlay={true} loop={true} playsInline={true} muted className="opacity-0  w-full group-hover:opacity-100 h-full object-cover z-0 ">
                <source src="./videos/1608229455-star-wars.mp4" type='video/mp4'/>
            </video>
        </div>
    </div>
}

export default Viewers;
import React from 'react'
import {useRef} from "react";
import MovieCard from './MovieCard';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
const RowContainer = ({movies,desc}) => {
    const scrollValue=600;
    const containerRef=useRef();
    const leftScroll=()=>{
      containerRef.current.scrollLeft-=scrollValue;
    }
    const rightScroll=()=>{
      containerRef.current.scrollLeft+=scrollValue;
    }
  return (
    <div>
        <div className="flex justify-between">
          <p className="uppercase ml-4 text-xl text-white font-semibold">{desc}</p>
          <div className="flex gap-4">
          <div onClick={leftScroll}  className='w-8 h-8 rounded-lg bg-white lg:flex hidden 
            items-center justify-center  cursor-pointer
             hover:shadow-lg'>
               <MdChevronLeft  className='text-lg text-gray-800'/>             
            </div>
            <div onClick={rightScroll}  className='w-8 h-8 rounded-lg bg-white lg:flex hidden
            items-center justify-center cursor-pointer 
             hover:shadow-lg'>
               <MdChevronRight  className='text-lg text-gray-800'/>
            </div>
          </div>
        </div>
        <div className="flex gap-2 py-2 overflow-x-scroll  " ref={containerRef}>
            {movies.map((movie,id)=><MovieCard key={id} movie={movie} />)}
       </div>
    </div>
  )
}

export default RowContainer
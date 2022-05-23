

import { useEffect ,useState} from "react";
import MovieCard from './MovieCard';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
const Originals=()=>{
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
            fetch('http://api.themoviedb.org/3/discover/tv?api_key=7a2a30724470ebf691cd1bddcb3f08ff&with_networks=213').then((data)=>{
                return data.json();
            }).then((data)=>{
                setMovies(data.results);
            })
    },[])

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite:true,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
    
    return <div>
        <p className="uppercase ml-4 text-xl text-white font-semibold">Originals</p>
        <Carousel {...settings}>
            {movies.map((movie)=><MovieCard  movie={movie} />)}
       </Carousel>
    </div>
}

const Carousel = styled(Slider)`
  margin-top: 20px;
 
  .slick-prev {
    opacity:0;
  }
  .slick-next {
    opacity:0;
  }
`;

export default Originals;
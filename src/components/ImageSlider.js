import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
const ImageSlider=()=>{
    const settings={
         dots:true,
         infinite:true,
         speed:500,
         slidesToShow:1,
         slidesToScroll:1,
         autoplay:true,
    }
    return <Carousel {...settings} className="mt-8">
            <div className='border-4 hover:border-white border-gray-800 h-36 md:h-72 shadow-md shadow-shadow cursor-pointer rounded-lg'>
               <img src="../images/slider-badag.jpg"  alt="slides" className='rounded-lg h-full w-full object-cover'/>
            </div>
            <div className='border-4 hover:border-white h-36 md:h-72 border-gray-800  shadow-md shadow-shadow cursor-pointer rounded-lg'>
               <img src="../images/slider-badging.jpg"  alt="slides" className='rounded-lg h-full w-full object-cover'/>
            </div>
            <div className='border-4 hover:border-white h-36 md:h-72 border-gray-800 shadow-md shadow-shadow cursor-pointer rounded-lg'>
               <img src="../images/slider-scale.jpg"  alt="slides" className='rounded-lg h-full w-full object-cover'/>
            </div>
            <div className='border-4 hover:border-white h-36 md:h-72 border-gray-800 shadow-md shadow-shadow cursor-pointer rounded-lg'>
               <img src="../images/slider-scales.jpg"  alt="slides" className='rounded-lg h-full w-full object-cover'/>
            </div>
        </Carousel>

}

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

export default ImageSlider;
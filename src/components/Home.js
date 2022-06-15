import Header from './Header';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Trending from './Trending';
import Popular from './Popular';
import TopRated from './TopRated';
import Upcomming from './Upcomming';
import Originals from './Originals';
import Genres from './Genres';
const Home=()=>{
    return <div className=' w-screen h-screen bg-banner overflow-x-hidden	'>
          <Header/>
          <div className='relative top-16 mx-2 md:mx-12 z-0'>
              <ImageSlider  />
          </div>
            <div className='mt-32 mx-2 md:mx-12'>
              <Viewers/>
           </div>
           <div className='mx-2 md:mx-8 mt-12 space-y-12'>
          <div className=' '>
              <Trending/>
         </div>
         <div className=' '>
             <Popular/>
         </div>
         <div className=''>
             <Upcomming/>
         </div>
         <div className=''>
              <Genres/>
           </div>
         <div className=''>
             <Originals/>
         </div>
         <div className=''>
             <TopRated/>
         </div>
           </div>
    </div>
}

export default Home;
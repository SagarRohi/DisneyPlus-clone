import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner'
import {
  Login,
  Home,
  Comedy,
  Horror,
  Thriller,
  Family,
  Banner,
  SignUp,
  Action,
} from "./components";
import { useDispatch } from "react-redux";
import { addMovieType } from "./toolkit";
const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
      /* Trending fetch */
    
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=7a2a30724470ebf691cd1bddcb3f08ff"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch(addMovieType({ type: "Trending", movies: data.results }));
      });

    
      /* Popular */
    
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7a2a30724470ebf691cd1bddcb3f08ff&language=en-US&page=1"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch(addMovieType({ type: "Popular", movies: data.results }));
      });

    
      /* Upcomming */
    
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=7a2a30724470ebf691cd1bddcb3f08ff&language=en-US&page=1"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch(addMovieType({ type: "Upcomming", movies: data.results }));
      });

    
      /*Originals */
    

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=7a2a30724470ebf691cd1bddcb3f08ff&with_genres=9648&page=1"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch(addMovieType({ type: "Originals", movies: data.results }));
      });

    
      /* top rated */
    
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=7a2a30724470ebf691cd1bddcb3f08ff&with_genres=878&page=1"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch(addMovieType({ type: "Top_Rated", movies: data.results }));
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && (
        <div className="w-screen h-screen  bg-main flex justify-center items-center">
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {!loading && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Comedy" element={<Comedy />} />
          <Route path="/Action" element={<Action />} />
          <Route path="/Horror" element={<Horror />} />
          <Route path="/Thriller" element={<Thriller />} />
          <Route path="/Family" element={<Family />} />
          <Route path="/:id" element={<Banner />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}
    </>
  );
};

export default App;

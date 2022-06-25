import {createSlice} from '@reduxjs/toolkit';



const initialAuthState={
    name:"",
    email:"",
    photo:"",
    mobileSearchShow:false,
    deskTopSearchShow:false,
    allKindMovies:{}
}
const authSlice=createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        setUser:(state,action)=>{
             const {displayName,email,photoURL}=action.payload;
             state.name=displayName;
             state.email=email;
             state.photo=photoURL;
        },

        unSetUser:(state,action)=>{
             state.name="";
             state.email="";
             state.photo="";
        },
        setMobileSearchShow:(state,action)=>{
            state.mobileSearchShow=action.payload;
        },
        setDeskTopSearchShow:(state,action)=>{
            state.deskTopSearchShow=action.payload;
        },
        addMovieType:(state,action)=>{
            const {type,movies}=action.payload;
            state.allKindMovies[type]=movies;
        }
    }
})


export const {setUser,unSetUser,setSearchShow,setMobileSearchShow,setDeskTopSearchShow,addMovieType} =authSlice.actions;
export default authSlice.reducer;
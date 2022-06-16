import {createSlice} from '@reduxjs/toolkit';

const initialAuthState={
    name:"",
    email:"",
    photo:"",
    mobileSearchShow:false,
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
        }
    }
})


export const {setUser,unSetUser,setSearchShow,setMobileSearchShow} =authSlice.actions;
export default authSlice.reducer;
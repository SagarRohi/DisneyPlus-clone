import {createSlice} from '@reduxjs/toolkit';

const initialAuthState={
    name:"",
    email:"",
    photo:"",
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
    }
})


export const {setUser,unSetUser} =authSlice.actions;
export default authSlice.reducer;
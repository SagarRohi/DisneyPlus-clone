import {Routes,Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Comedy from './Comedy';
import Action from './Action';
import Horror from './Horror';
import Thriller from './Thriller';
import Family from './Family';
import Banner from './Banner';
import SignUp from './SignUp';
const App=()=>{
  return <>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/Comedy' element={<Comedy/>}/>
    <Route path='/Action' element={<Action/>}/>
    <Route path='/horror' element={<Horror/>}/>
    <Route path='/thriller' element={<Thriller/>}/>
    <Route path='/family' element={<Family/>}/>
    <Route path='/:id' element={<Banner/>}/>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>
  </>
}

export default App;
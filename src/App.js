import {Routes,Route} from 'react-router-dom';
import {Login,Home,Comedy,Horror,Thriller,Family,Banner,SignUp} from './components';
import Action from './Action';
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
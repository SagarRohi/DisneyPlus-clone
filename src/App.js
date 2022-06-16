import {Routes,Route} from 'react-router-dom';
import {Login,Home,Comedy,Horror,Thriller,Family,Banner,SignUp,Action} from './components';
const App=()=>{
  return <>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/Comedy' element={<Comedy/>}/>
    <Route path='/Action' element={<Action/>}/>
    <Route path='/Horror' element={<Horror/>}/>
    <Route path='/Thriller' element={<Thriller/>}/>
    <Route path='/Family' element={<Family/>}/>
    <Route path='/:id' element={<Banner/>}/>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>
  </>
}

export default App;
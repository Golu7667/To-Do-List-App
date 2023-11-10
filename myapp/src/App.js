import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from "./components/Headers/Headers"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Edit from "./pages/Edit/Edit"
import Register from "./pages/Register/Register"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
   <>
       <Headers/>
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userprofile/:id' element={<Profile/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/register' element={<Register/>}/>

       </Routes>
       
       
   </>
  );
}

export default App;

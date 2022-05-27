import Admin from "./Components/Registr/Admin";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Main from "./Components/Tel Book/Main";
import Fetch from "./Components/Pharmacy/Fetch";
import Error from "./Error";
import {useState} from 'react'


function App() {
  const[logined,setLogined] = useState(localStorage.getItem("login")?true:false)



  return (
    <Router>
      <div className="linkDiv">
      {logined?<Link to='/tel-book'>Tel book</Link>:null}
      {logined?<Link to='/pharm' >Pharmacy</Link>:null}
      <Link to='/my-first-project' onClick={()=>{setLogined(false); localStorage.removeItem("login")} }>Logaout</Link>
      </div>
      <Routes>
        <Route path="/my-first-project" element={<Admin setLogined={setLogined}/>} />
        <Route path="/tel-book" element={<Main />} />
        <Route path="/pharm" element={<Fetch />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;

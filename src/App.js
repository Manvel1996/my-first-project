import Admin from "./Components/Registr/Admin";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Main from "./Components/Tel Book/Main";
import Fetch from "./Components/Pharmacy/Fetch";
import Error from "./Error";
import {useState} from 'react'
import TodoMain from "./Components/TodoList/TodoMain";


function App() {
  const[logined,setLogined] = useState(localStorage.getItem("login")?true:false)
  const[language,setLanguage] = useState(localStorage.getItem("language") == null?localStorage.setItem("language","en"):null)


  return (
    <Router>
      <div className="linkDiv">
      {logined?<Link to='/tel-book'>{localStorage.getItem("language") == "en"? "Tel book":"ՀԵռախոսագիրք"}</Link>:null}
      {logined?<Link to='/pharm' >{localStorage.getItem("language") == "en"? "Pharmacy":"Դեղատուն"}</Link>:null}
      {logined?<Link to='/todoList'>{localStorage.getItem("language") == "en"?"Todo List":"Գործերի Ցանկ"} </Link>:null}
      <div className="languageFlag">
        <img onClick={()=>{setLanguage("am");localStorage.setItem("language","am")}}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Armenia_%283-2%29.svg/200px-Flag_of_Armenia_%283-2%29.svg.png"/>
        <img onClick={()=>{setLanguage("en");localStorage.setItem("language","en")}}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/800px-Flag_of_the_United_States_%28Pantone%29.svg.png?20160113211754"/>
      </div>
      <Link to='/my-first-project' onClick={()=>{setLogined(false); localStorage.removeItem("login")} }>{localStorage.getItem("language") == "en"? "Log out":"Դուրս գալ"}</Link>
      </div>
      <Routes>
        <Route path="/my-first-project" element={<Admin setLogined={setLogined}/>} />
        <Route path="/tel-book" element={<Main />} />
        <Route path="/pharm" element={<Fetch />}/>
        <Route path="/todoList" element={<TodoMain />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;

import { useState } from "react"

function TodoForm({onAdd}){
    const[text,setText] = useState("")
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            onAdd(text);
            setText("");
        }}className="todoHeader">
            <input type="text" value={text}  maxLength = "19" onChange={(e)=>{
               setText(e.target.value);
            }}/>
            <button>{localStorage.getItem("language") == "en"? "Add":"Ավելացնել"}</button>
        </form>
    )
}

export default TodoForm
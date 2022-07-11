import { useContext } from "react";
import { changeDelete } from "./TodoMain";

function TodoItem({todo}){
    const [changed,deleted] = useContext(changeDelete)
    return(
        <div className="todoItem">
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
                    changed({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }}/>
                {todo.text}
            </label>
                <button onClick={()=>{deleted(todo)}}>X</button>
        </div>
    )
}

export default TodoItem;
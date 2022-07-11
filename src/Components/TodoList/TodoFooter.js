function TodoFooter({todos,onClearCompleted}){
    let completedSize = todos.filter((todo)=> todo.isCompleted).length
    return(
        <div className="todoFooter">
            <span>{completedSize}/{todos.length}{localStorage.getItem("language") == "en"? "Completed":"Ավարտած"} </span>
            <button onClick={onClearCompleted}>{localStorage.getItem("language") == "en"? "Clear Completed":"Մաքրել ավարտածը"}</button>
        </div>
    )
}

export default TodoFooter
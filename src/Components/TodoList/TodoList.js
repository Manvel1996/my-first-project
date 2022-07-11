import TodoItem from "./TodoItem"

function TodoList({todos}){
    return(
        <div className="todoList">
            {
                todos.map((todo)=>{
                   return (
                    <TodoItem
                     key={todo.id}
                      todo = {todo}
                    />
                   )
                })
            }
        </div>
    )
}

export default TodoList

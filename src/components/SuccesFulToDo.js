import TodoItem from "../components/ToDoItem"


export default function SuccessFulToDoList({ toDos, handleDelete, toggleTodoStatus }) {
    return (
      <div className="todos">
        {toDos
        .filter((todo)=> todo.status)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} toggleTodoStatus={toggleTodoStatus} />
        ))}
      </div>
    );
  }
import TodoItem from "../components/ToDoItem"


export default function TodoList({ toDos, handleDelete, toggleTodoStatus }) {
    return (
      <div className="todos">
        {toDos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} toggleTodoStatus={toggleTodoStatus} />
        ))}
      </div>
    );
  }
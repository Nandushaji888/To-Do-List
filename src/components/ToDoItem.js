export default function TodoItem({ todo, handleDelete, toggleTodoStatus }) {
  return (
    <div className="todo">
      <div className="left">
        <input
          type="checkbox"
          checked={todo.status}
          onChange={(e) => toggleTodoStatus(todo.id, e.target.checked)}
        />
        <p className={todo.status ? "completed" : ""}>{todo.text}</p>
      </div>
      <div className="right">
        <i className="fas fa-times" onClick={() => handleDelete(todo.id)}></i>
      </div>
    </div>
  );
}
  
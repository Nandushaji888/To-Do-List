export function addTodo(toDo, setTodos, setTodo, setshowClearAll,toDos) {
  if (toDo) {
    setTodos([{ id: Date.now(), text: toDo, status: false }, ...toDos]);
    setTodo("");
    setshowClearAll(true);
  }
}

export function handleDelete(
  id,
  setTodos,
  toDos,
  setshowClearAll,
  setshowFinished
) {
  setTodos(toDos.filter((todo) => todo.id !== id));
  if (toDos.length === 1) {
    setshowClearAll(false);
    setshowFinished(false);
  }
}

export function toggleTodoStatus(
  id,
  checked,
  toDos,
  setTodos,
  setshowFinished
) {
  setTodos(
    toDos.map((todo) => {
      if (todo.id === id) {
        todo.status = checked;
        setshowFinished(true);
      }
      return todo;
    })
  );
}

export function allDelete(setTodos, setshowClearAll, setshowFinished) {
  setTodos([]);
  setshowClearAll(false);
  setshowFinished(false);
}

export function clearFinishedToDo(
  toDos,
  setTodos,
  setshowFinished,
  setshowClearAll
) {
  setTodos(toDos.filter((todo) => !todo.status));
  setshowFinished(false);
  if (toDos.length === 1) {
    setshowClearAll(false);
  }
}

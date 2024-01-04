import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";
// import SuccessFulToDoList from "./components/SuccesFulToDo"
import AllClearBtn from "./components/AllClearBtn";
import { useState } from "react";

import {
  addTodo,
  handleDelete,
  toggleTodoStatus,
  allDelete,
  clearFinishedToDo,
} from "./healpers/helperFunctions"; 

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  const [showClearAll, setshowClearAll] = useState(false);
  const [showFinished, setshowFinished] = useState(false);



  const addTodoFunction = () => {
    addTodo(toDo, setTodos, setTodo, setshowClearAll,toDos);
  };

  const handleDeleteFunction = (id) => {
    handleDelete(id, setTodos, toDos, setshowClearAll, setshowFinished);
  };

  const toggleTodoStatusFunction = (id, checked) => {
    toggleTodoStatus(id, checked, toDos, setTodos, setshowFinished);
  };

  const allDeleteFunction = () => {
    allDelete(setTodos, setshowClearAll, setshowFinished);
  };


  const clearFinishedToDoFunction = () => {
    clearFinishedToDo(toDos, setTodos, setshowFinished, setshowClearAll);
  };


  const[count,setCount]=useState('0')
  
  return (
    <div className="app">
      <Header />
      <TodoInput addTodo={addTodoFunction} toDo={toDo} setTodo={setTodo} />
      <TodoList
        toDos={toDos}
        handleDelete={handleDeleteFunction}
        toggleTodoStatus={toggleTodoStatusFunction}
      />
      <AllClearBtn
        allDelete={allDeleteFunction}
        clearfinishedToDo={clearFinishedToDoFunction}
        showClearAll={showClearAll}
        showFinished={showFinished}
      />
      
    </div>
  );
}

export default App;


//  <SuccessFulToDoList
//         toDos={toDos}
//         handleDelete={handleDeleteFunction}
//         toggleTodoStatus={toggleTodoStatusFunction}
//       /> 
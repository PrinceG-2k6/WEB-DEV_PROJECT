import './App.css';
import Header from "./MyContent/Header";
import ToDos from "./MyContent/ToDos";
import { useEffect, useState } from 'react';
import AddToDo from './MyContent/AddToDo';
import Footer from "./MyContent/Footer";
import About from './MyContent/about';

import {
  BrowserRouter as Router,
  Routes,          // ✅ Use Routes instead of Switch
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("I am On Delete of", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const onUpdate = (todo, updatedTitle, updatedDesc) => {
    console.log("Updating ", todo);

    
    const updatedTodo = {
      ...todo, 
      title: updatedTitle,
      desc: updatedDesc
    };

    setTodos(todos.map(t => t.Sno === todo.Sno ? updatedTodo : t));
  };



  const addToDo = (title, desc) => {
    console.log("Adding", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].Sno + 1;
    }

    const myTodo = {
      Sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="MyToDoList" searchBar={false} />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <AddToDo addToDo={addToDo} />
              <ToDos todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
            </>
          }
        />
        <Route 
        path="/about" 
        element={
        <>
        <About />
        </>

        } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

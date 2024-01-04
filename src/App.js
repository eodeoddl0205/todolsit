import Title from "./Components/title";
import CustomInput from "./Components/customInput";
import Item from "./Components/item";
import "./App.css"
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (content) => {
    const id = Date.now();
    setTodos((prev) => [
      ...prev,
      {
        id,
        content,
        completed : false,
      }
    ])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleItem = (id) => {
    setTodos((prev) => prev.map((todo) => {
      return todo.id === id
      ? {
        ...todo,
        completed : !todo.completed,
      }
      : todo;
    }));
  }

  return (
    <div className="App">
      <Title/>
      <CustomInput onAdd={addTodo}/>
      {todos.map((todo) => (
        <Item id={todo.id} content={todo.content} key={todo.id} onDelete={deleteTodo} onToggle={toggleItem} completed={todo.completed}/>
      ))}
    </div>
  );
}

export default App;
import { Header } from "./Header.jsx";
import { List } from "./List.jsx";
import { Footer } from "./Footer.jsx";
import {useState} from "react";

/**
 * TodoApp component is the "work manager" of the application.
 * It has the state of the application and passes it down to its children.
 * It knows how to add a new todo item from a string.
 */
export function TodoApp() {
  const [todos, setTodos] = useState([]);

  function addTodo (title) {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    };

    setTodos([  ...todos, newTodo  ]);
  }

  return (
      <section className="todoapp">
        <Header onAdd={addTodo} />
        <List todos={todos}/>
        <Footer/>
      </section>
  )
}

/**
 * List component has one job: render a list of todos.
 * It receives todos as a prop from the App component.
 * It maps over the todos array and renders a todo item.
 */
import {ListItem} from "./ListItem.jsx";

export function List({ todos }) {
  return (
      <section className="main">
        <input className="toggle-all"
               type="checkbox"/>
        <ul className="todo-list">
          {todos.map(todo => <ListItem key={todo.id} todo={todo}/>)}
        </ul>
      </section>
  )
}

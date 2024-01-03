import {useState} from "react";

export function ListItem({ todo }) {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(todo.title);

  function handleDbClick() {
    console.log('double click')
    setEditMode(!editMode)
  }

  function exitEditMode(e) {
    if (e.key === 'Enter') {
      setEditMode(false)
    }
  }

  return (
      <li className={editMode ? 'editing' : ''}
          onDoubleClick={handleDbClick}
      >
        <div className="view" >
          <input type="checkbox" checked={todo.completed}/>
          <label>{inputValue}</label>
          <button className="destroy"/>
        </div>
        <input className="edit"
               onChange={(e) => setInputValue(e.target.value)}
               value={todo.title} onKeyDown={exitEditMode}/>
      </li>
  )
}

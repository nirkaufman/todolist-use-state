/**
 * The header component has one job,
 * when the user presses enter in the input field,
 * take the value and pass it to the onAdd prop.
 */
export function Header({ onAdd }) {

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      onAdd(event.target.value)
      event.target.value = '';
    }
  }

  return (
      <header className="header">
        <h1>Todos</h1>
        <input className="new-todo"
               placeholder="What needs to be done?"
               onKeyDown={handleKeyDown}
               autoFocus/>
      </header>
  )
}

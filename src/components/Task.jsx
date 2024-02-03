

export default function Task({task , onDelete , onToggleDone}) {
  return (
    <li>
        <span onClick={onToggleDone}
        style={{textDecoration: task.done === true ? "line-through" : "none"}}
        
        >{task.text}</span>
        <button onClick={onDelete}> Remove </button>
    </li>
  )
}

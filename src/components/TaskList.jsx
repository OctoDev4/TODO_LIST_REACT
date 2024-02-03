import Task from "./Task";


export default function TaskList({tasks,onDeleteTask,onToggleTaskDone}) {

  if(tasks.length === 0 ){
    return(
      <p>não tem tarefa cadastrada</p>
    )
  }
  return (
   <ul>
   {tasks.map((task)=>(
    <Task key={task.id}
     task={task}
     onDelete = {()=> onDeleteTask(task.id)}
     onToggleDone = {()=>onToggleTaskDone(task.id)}

     />
   ))}
   </ul>
  )
}

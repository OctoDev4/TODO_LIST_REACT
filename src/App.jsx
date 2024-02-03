// Importa os hooks do React necessários
import { useState, useEffect } from 'react';

// Importa os componentes TaskList e InputTask do diretório './components'
import TaskList from './components/TaskList';
import InputTask from './components/InputTask';

// Componente principal App
function App() {
  // Define o estado inicial para as tarefas e a função para atualizar o estado
  const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem("tasks"))
   || []);

  // Função para adicionar uma nova tarefa ao estado
  const addTask = (task) => {
    // Cria uma nova tarefa com um ID único, texto e status 'done' como falso
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    // Exibe as tarefas no console (apenas para depuração)

    localStorage.setItem("tasks" , JSON.stringify(tasks))
    console.log(tasks);
  };

  // Função para remover uma tarefa com base no ID
  const removeTask = (taskId) => {
    // Filtra as tarefas mantendo apenas aquelas com IDs diferentes do ID fornecido
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // funtion to set task Done
  const toggleTaskDone = (taskId) => {
    // Atualiza o estado das tarefas, mapeando sobre o array de tarefas
    setTasks(tasks.map((task) =>
      // Verifica se a tarefa atual possui o mesmo ID que o ID fornecido
      task.id === taskId
        // Se sim, cria uma nova tarefa com o mesmo conteúdo, alterando o estado 'done'
        ? { ...task, done: !task.done }
        // Se não, mantém a tarefa inalterada
        : task

  
    ));
  };

  // local storage
  useEffect(()=>{
    localStorage.setItem("tasks" , JSON.stringify(tasks))

  },[tasks])

  // Componente principal retorna JSX
  return (
    <>
      {/* Título da aplicação */}
      <h1>Lista de tarefas</h1>

      {/* Componente InputTask com a função onAddTask para adicionar tarefas */}
      <InputTask onAddTask={addTask} />

      {/* Componente TaskList com as tarefas e a função onDeleteTask para remover tarefas */}
      <TaskList tasks={tasks} onDeleteTask={removeTask} onToggleTaskDone={toggleTaskDone} />
    </>
  );
}

// Exporta o componente principal App
export default App;

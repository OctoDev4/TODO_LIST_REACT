import { useState } from "react";

export default function InputTask({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="adicione uma nova tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

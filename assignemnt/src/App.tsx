import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

export interface Task {
  id: number;
  title: string;
  category: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Complete React Assignment",
      category: "University",
    },
    {
      id: 2,
      title: "Prepare for Midterm",
      category: "Study",
    },
    {
      id: 3,
      title: "Submit Project Report",
      category: "Project",
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("University");

  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  const handleAddTask = () => {
    const trimmedTask = newTask.trim();

    if (!trimmedTask) {
      return;
    }

    const task: Task = {
      id: Date.now(),
      title: trimmedTask,
      category,
    };

    setTasks((prevTasks) => [...prevTasks, task]);
    setNewTask("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>🎓 Campus Task Board</h1>
        <p className="subtitle">Manage your university tasks easily</p>

        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="University">University</option>
            <option value="Study">Study</option>
            <option value="Project">Project</option>
            <option value="Personal">Personal</option>
          </select>

          <button type="button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

        <p className="total">Total Tasks: {tasks.length}</p>
      </div>
    </div>
  );
}

export default App;
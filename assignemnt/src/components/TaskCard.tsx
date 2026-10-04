import type { Task } from "../App";

interface TaskCardProps {
  task: Task;
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <span className="task-tag">{task.category}</span>
    </div>
  );
}

export default TaskCard;
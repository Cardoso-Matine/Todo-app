import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, toggleComplete, editTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks to display</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
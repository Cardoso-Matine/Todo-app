import React, { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, toggleComplete, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      // Save the edit
      if (editText.trim() !== '') {
        editTask(task.id, editText);
      } else {
        // If empty, revert to original text
        setEditText(task.text);
      }
    }
    setIsEditing(!isEditing);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  // Format the creation date
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
      </div>
      
      <div className="task-content">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="edit-input"
            autoFocus
          />
        ) : (
          <>
            <p className="task-text">{task.text}</p>
            <span className="task-date">{formatDate(task.createdAt)}</span>
          </>
        )}
      </div>
      
      <div className="task-actions">
        <button 
          onClick={handleEdit}
          className={`edit-button ${isEditing ? 'save-mode' : ''}`}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button 
          onClick={() => deleteTask(task.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
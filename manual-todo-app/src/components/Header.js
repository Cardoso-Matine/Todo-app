import React from 'react';
import './Header.css';

function Header({ stats }) {
  return (
    <header className="header">
      <h1>To-Do List</h1>
      <div className="stats">
        <span>Total: {stats.total}</span>
        <span>Active: {stats.active}</span>
        <span>Completed: {stats.completed}</span>
      </div>
    </header>
  );
}

export default Header;
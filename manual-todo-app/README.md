# To-Do List Application

A modern, responsive To-Do List application built with React. This application allows users to manage their tasks efficiently with features like adding, editing, completing, and deleting tasks.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Edit existing tasks
- Delete tasks with confirmation
- Filter tasks by status (All, Active, Completed)
- Persistent storage using localStorage
- Responsive design for all devices

## Project Structure

```
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── TaskForm.js
│   │   ├── TaskForm.css
│   │   ├── TaskList.js
│   │   ├── TaskList.css
│   │   ├── TaskItem.js
│   │   └── TaskItem.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`

## Usage

- **Adding a task**: Type your task in the input field and click "Add" or press Enter
- **Completing a task**: Click the checkbox next to the task
- **Editing a task**: Click the "Edit" button, make changes, and click "Save"
- **Deleting a task**: Click the "Delete" button and confirm
- **Filtering tasks**: Use the filter buttons (All, Active, Completed) to filter tasks by status

## License

This project is licensed under the MIT License.
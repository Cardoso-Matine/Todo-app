# Task List Application

![Task List App Screenshot](/images/task-list-screenshot.png)

## Overview

This is a modern Task List application built with React. It allows users to manage their daily tasks with a clean and intuitive interface.

## Features

- Create, edit, and delete tasks
- Mark tasks as completed
- Filter tasks by status (All, Active, Completed)
- Persistent storage using localStorage
- Clean and modern UI with light colors
- Responsive design for all devices
- Task creation date tracking

## Technologies Used

- React.js
- CSS3 with custom variables
- Font Awesome icons
- Local Storage API

## Project Structure

```
src/
├── components/
│   ├── Header.js       # App header with title and statistics
│   ├── TaskForm.js     # Form for adding new tasks
│   ├── TaskList.js     # Container for all task items
│   └── TaskItem.js     # Individual task component
├── App.js              # Main application component
└── index.js            # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/task-list-app.git
   cd task-list-app
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

- **Adding a task**: Type your task in the input field and click "Add" or press Enter
- **Completing a task**: Click the checkbox next to a task
- **Editing a task**: Click the "Edit" button, make changes, then click "Save"
- **Deleting a task**: Click the "Delete" button (confirmation required)
- **Filtering tasks**: Use the filter buttons (All, Active, Completed) to view different task sets


## Acknowledgments

- Font Awesome for the icons
- React team for the amazing library

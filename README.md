# Task Management App

The **Task Management App** is a full-stack application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application enables users to efficiently create, edit, delete, and manage tasks. It offers categorization by priority, task details visualization, and completion tracking, along with an analytical dashboard to gain insights into task statistics.

---

## Features

### Basic Features
- **Task Creation:** Add tasks with a title, description, due date, and priority (High, Medium, Low).
- **Task List:** View tasks with filtering and sorting options (by due date and priority).
- **Task Details:** View full details of a specific task in a dedicated view.
- **Task Editing:** Update task details and sync them with the database.
- **Task Deletion:** Permanently delete tasks from the database.

### Analytical Dashboard
- **Task Distribution:** Visualize task distribution by priority using a pie chart.
- **Completion Rate:** Track the percentage of completed tasks over time with a line chart.
- **Upcoming Deadlines:** Highlight upcoming tasks using a list or calendar view.

### Advanced Features
- **Task Completion:** Mark tasks as completed, updating their status.
- **Task Filtering:** Filter tasks based on their completion status (Pending/Completed).
- **Search Functionality:** Use a search bar to filter tasks by title or description.
- **Responsive Design:** Fully usable on desktop and mobile devices.

---

## Backend Development
### API Endpoints
- **POST /tasks:** Create a new task.
- **GET /tasks:** Retrieve a list of tasks (supports filtering and sorting).
- **GET /tasks/:id:** Retrieve details of a specific task.
- **PUT /tasks/:id:** Update an existing task.
- **DELETE /tasks/:id:** Delete a task.

### Database Integration
- **MongoDB:** Stores and manages tasks with the help of Mongoose for schema management.

---

## UI/UX
- **User Interface:** Built with a modern and clean design using Bootstrap and CSS.
- **Validation:** Ensures required fields are filled out when creating or editing tasks.
- **Component Structure:** Organized React components for maintainability and scalability.

---

## Installation & Setup

### Backend (API)
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following environment variables:
   ```dotenv
   MONGO_URI=<my_mongodb_connection_string>
   PORT=8000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:8000`.

### Frontend (React App)
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
   The React app will run on `http://localhost:3000`.

---

## Folder Structure

```
/frontend               # Frontend React application
  /src
    /components       # Reusable React components (e.g., TaskList, TaskForm)
    /pages            # Pages for app routes (Home, Dashboard, About)
    /styles           # CSS files for styling
/backend               # Backend Node.js application
  /controllers        # Business logic for task operations
  /models             # Mongoose models for tasks
  /routes             # API route definitions for CRUD operations
  /config             # Configuration and database connection logic
  app.js              # Entry point for the backend server
.env                  # Environment variables for sensitive data
```

---

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API:** RESTful API

---

## How to Contribute
1. Fork the repository and clone it locally.
2. Create a feature branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make changes and commit them:
   ```bash
   git commit -am 'Add feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request with a description of your changes.

---

## Conclusion
The **Task Management App** offers a complete solution for task tracking with powerful features like task creation, status tracking, and a comprehensive analytical dashboard. Built with the best practices of the MERN stack, this application is scalable, user-friendly, and fully responsive across devices.

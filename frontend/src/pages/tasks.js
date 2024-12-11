import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UpcomingTasks = () => {
  
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Handle errors
  
  useEffect(() => {
    const fetchUpcomingTasks = async () => {
      try {
        setLoading(true);  // Set loading to true before fetching
        const response = await axios.get('http://localhost:8000/tasks');
        const tasks = response.data.data;
        // Filter tasks that are upcoming and not completed
        console.log("tasks", tasks);
        const filteredTasks = tasks.filter(
          (task) => new Date(task.dueDate) > new Date() && task.status !== 'Completed'
        );
        setUpcomingTasks(filteredTasks);
      } catch (error) {
        setError('Error fetching upcoming tasks');
        console.error('Error fetching upcoming tasks:', error);
      } finally {
        setLoading(false);  // Set loading to false after fetching is done
      }
    };

    fetchUpcomingTasks();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show loading message while tasks are being fetched
  }

  if (error) {
    return <div>{error}</div>;  // Show error message if there is an issue fetching tasks
  }

  return (
    <div className="upcoming-tasks-container">
      <h2>Upcoming Tasks</h2>
      <div>
        {upcomingTasks.length > 0 ? (
          upcomingTasks.map((task) => (
            console.log(task, "task"),
            <div key={task._id} className="task-item">
              <h4>{task.title}</h4>
              <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
              <p>Priority: {task.priority}</p>
              <Link to={`/tasks/edit/${task._id}`}>
                <button className="btn btn-warning">Edit</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No upcoming tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingTasks;

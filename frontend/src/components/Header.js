// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';


// const Header = () => {
//   return (
//     <nav className="shadow-sm navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <i className="bi bi-list-check"></i> Task Manager
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard">
//                 Dashboard
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/tasks">
//                 <i className="bi bi-calendar-event"></i> Upcoming Tasks
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;



import React, { useState } from "react";
import "../styles/Navbar.css"; // Create this file for styling

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Task Management</div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        
        <a href="/about">About</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/tasks">Tasks</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Header;

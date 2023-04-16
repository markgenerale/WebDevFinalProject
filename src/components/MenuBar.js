import React from 'react';
import './MenuBar.css';
import { useNavigate } from 'react-router-dom';

function MenuBar(props) {
  // Hook to navigate programmatically with react-router
  let navigate = useNavigate();

  // Function to handle route change when clicking the Add button
  const routeChange = () => {
    let path = `/add`;
    navigate(path);
  };

  // Function to handle route change when clicking the Edit button
  const routeChangeEdit = () => {
    let path = `/edit`;
    navigate(path);
  };

  // Function to handle route change when clicking the Delete button
  const routeChangeDelete = () => {
    let path = `/del`;
    navigate(path);
  };

  // Function to handle route change when clicking the Log out button
  const routeChangeLogOut = () => {
    let path = `/loggedout`;
    navigate(path);
    // Call setIsLoggedIn if it's defined
    if (props.setIsLoggedIn) {
      props.setIsLoggedIn(false);
    }
  };

  return (
    <div className="menu-bar">
      {/* Render Add button and trigger route change on click */}
      <div className="menu-button add-box" onClick={routeChange}>
        Add
      </div>
      {/* Render Delete button and trigger route change on click */}
      <div className="menu-button delete-box" onClick={routeChangeDelete}>
        Delete
      </div>
      {/* Render Edit button and trigger route change on click */}
      <div className="menu-button edit-box" onClick={routeChangeEdit}>
        Edit
      </div>
      {/* Render log out button and trigger route change on click */}
      <div className="menu-button logout-box" onClick={routeChangeLogOut}>
        Log out
      </div>
    </div>
  );
}

export default MenuBar;

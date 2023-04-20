import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReadyBar.css';




function ReadyBar(props) {
    // Hook to navigate programmatically with react-router
    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/loggedin`;
        navigate(path);
      };

return (
    <div className="ready-bar">
      {/* Render Add button and trigger route change on click */}
      <div className="ready-button" onClick={routeChange}>
        Get Started!
      </div>
      </div>

      );


}
export default ReadyBar;
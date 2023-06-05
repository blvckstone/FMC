import React, { useState } from 'react';
import '../css/Sidebar.css';

function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>Open Sidebar</button>

      {sidebarVisible && (
        <div className="sidebar-overlay">
          <div className="sidebar-content">
            <ul className="menu-options">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
            <button onClick={toggleSidebar}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

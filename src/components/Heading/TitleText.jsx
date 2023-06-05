import React, { useEffect, useState } from "react";
import "../../css/Sidebar.css"
import { Link } from "react-router-dom";

function TitleText(props) {
  const [btnEffectProps, setBtnEffectProps] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  

  function menuBtnEffect() {
    setBtnEffectProps(true);
  }

  useEffect(
    function () {
      const interval = setInterval(() => {
        if (btnEffectProps === true) {
          setBtnEffectProps(false);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    },
    [btnEffectProps]
  );

  return (
    <div className="div2">
      <h2 className="TitleText">{props.text}</h2>

      <button
        style={ btnEffectProps ? { backgroundColor: "white", color: "black" } : {}}
        onClick={menuBtnEffect}
        className="headingButtonMenu">
      

        <div>
          <button onClick={toggleSidebar}><span class="material-symbols-outlined">menu</span></button>
            
          {sidebarVisible && (
            <div className="sidebar-overlay" onClick={toggleSidebar}>
              <div className="sidebar-content">
                <ul className="menu-options">
                  <Link to="/"><li>Home</li></Link>
                  <Link to="/list"><li>All Children List</li></Link>
                  <li>All Persons List</li>
                </ul>
                <button id="menuClosebtn" onClick={toggleSidebar}>Close</button>
              </div>
            </div>
          )}

        </div>
      </button>
    </div>
  );
}

export default TitleText;

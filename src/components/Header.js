import React from 'react'
 
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a href='/#' className="brand">
                Task Management React
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="https://github.com/Bnop1146/task-manager-react">Github</a>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Header;
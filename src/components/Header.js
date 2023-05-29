import React from 'react'
 
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
                Task Management React
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="https://wpwebinfotech.com">Github</a>
            </div>
          </div>
        </nav>
      </div>
    );
}
 
export default Header;
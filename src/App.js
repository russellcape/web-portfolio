import React from 'react';
import './App.css';
import './images/binary-wallpaper.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <h1>This is the Header</h1>
      </header>
      <body>
        <div className="Title">
          <h2>Contents:</h2>
        </div>
        <div className="Content">
          <div className="Table">
            <ul>
              <li>
                Profile Picture
              </li>
              <li>
                Summary
              </li>
              <li>
                Contact info
              </li>
            </ul>
          </div>
          <div>
            <p>
              You think water moves fast? You should see ice.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

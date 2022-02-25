import React from "react";

import "./App.css";

function App() {
   const todosList = [
      { title: "Learn JS", completed: false },
      { title: "Learn NodeJS", completed: false },
      { title: "Learn React", completed: false },
      { title: "Learn Angular", completed: false },
      { title: "Learn ExpressJs", completed: false },
   ];
   return (
      <div className="container-sm">
         <div className="row">
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
         </div>
      </div>
   );
}

export default App;

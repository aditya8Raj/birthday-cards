import React, { useState } from "react";
import data from "./data";
import List from "./List";
import 'tachyons';

function App() {
  const [people, setpeople] = useState(data)

  return (
    <div className="main-div">
      <div className="container div-1 grow">
        <h3> {people.length} birthdays today</h3>
        <List people={people}/>
        <button className="grow" onClick={() => setpeople([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;

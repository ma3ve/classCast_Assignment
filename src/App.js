import React from "react";
import Header from "./components/Headers";
import Health from "./components/Health";
import TodaysTraning from "./components/TodaysTraning";
import YourTrainers from "./components/YourTrainers";
function App() {
  return (
    <div className="App">
      <div className="row justify-content-end">
        <div className="col-3" style={{ marginRight: 10 }}>
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <Health />
          </div>
          <div className="row">
            <TodaysTraning />
          </div>
          <div className="row">
            <YourTrainers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

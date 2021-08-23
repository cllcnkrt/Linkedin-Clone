import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* App body */}
        <Sidebar />
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;

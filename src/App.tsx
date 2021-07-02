import React from "react";
import { Dashboard } from "./Dashboard";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;

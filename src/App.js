import React from "react";
import { createRoot } from "react-dom/client";
import SimpleMap from "./Components/Map";

import "./styles.css";
const locations = require("./locations.json");

function App() {
  return (
    <div className="App">
      <SimpleMap locations={locations} />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

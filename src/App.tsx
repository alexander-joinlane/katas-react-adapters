import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import Form from "./components/Form";

function App() {
  const [fd, setFD] = useState("");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React Component Adapters</h1>
      <div className="card">
        <Form
          onSubmit={(fd) => {
            const fdAsString = JSON.stringify(fd, null, 2);
            setFD(fdAsString);
          }}
        />
        <pre style={{ textAlign: "left" }}>{fd}</pre>
      </div>
    </>
  );
}

export default App;

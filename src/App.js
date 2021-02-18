import Button from "./components/Button";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [status, setStatus] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    const getStatus = async () => {
      const data = await fetchStatus()
      setStatus(data.status)
      setName(data.name)
      //console.log(data.status)
    }
    getStatus()
  }, [])

  const fetchStatus = async () => {
    const res = await fetch(
      "https://api.jsonbin.io/b/602d9db60665b21b00b926bc",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "secret-key":
            "$2b$10$v/hKaI/85bF07fQJXEGB9.xJAfAWw7SA7so6.AePQ57DcF5Nketem",
          versioning: "false",
        },
        body: JSON.stringify(),
      }
    );
    const data = await res.json();
    return data;
  };

  const changeStatus = async () => {
    const data = await fetchStatus()

    const res = await fetch(
      "https://api.jsonbin.io/b/602d9db60665b21b00b926bc",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "secret-key": "$2b$10$v/hKaI/85bF07fQJXEGB9.xJAfAWw7SA7so6.AePQ57DcF5Nketem",
          versioning: "false",
        },
        body: JSON.stringify({
          "id": "1",
          "name": "led0",
          "status": !status
        }),
      }
    );
    setStatus(!status)
  }
  

  return (
    <div className="container">
      <h2>{name}</h2>
      <Button
        text={status ? "On": "Off"}
        onAdd={changeStatus}
        onClick={changeStatus}
        color={status ? "green" : "red"}
      />
    </div>
  );
}

export default App;

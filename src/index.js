import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import "./fb-config"
import "./css/index.css"
import App from "./App"

const Index = () => {
  const [start, setStart] = useState(false)

  if (!start) {
    return (
      <div className="start-screen">
        <div className="start-wrapper">
          <div className="start-title">Find the characters!</div>
          <button className="start-btn" onClick={() => setStart(true)}>
            Click to start
          </button>
        </div>
      </div>
    )
  } else {
    return <App />
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
)

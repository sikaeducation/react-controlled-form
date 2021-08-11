import { useState } from "react"
import LoginForm from "./LoginForm"
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("")
  const login = (username, password) => setMessage(`You logged in with ${username}: ${password}`)

  return (
    <div className="App">
      <LoginForm login={login} />
    {
      message
        ? <p>{message}</p>
        : null
    }
    </div>
  )
}

export default App;

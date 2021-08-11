import { useState } from "react"
import "./LoginForm.css"

const LoginForm = ({login}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const updateUsername = event => setUsername(event.target.value)
  const updatePassword = event => setPassword(event.target.value)
  const handleSubmit = event => {
    event.preventDefault()
    login(username, password)
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" required value={username} onChange={updateUsername} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" required value={password} onChange={updatePassword} />

      <input type="submit" value="Login" />
    </form>
  )
}

export default LoginForm

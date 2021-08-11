import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
const { change } = fireEvent

test("Logs into the form", async () => {
  render(<App />);

  const username = screen.getByLabelText(/Username/)
  expect(username.textContent).toBe("")
  const password = screen.getByLabelText(/Password/)
  expect(password.textContent).toBe("")

  change(username, { target: { value: "guest" }})
  change(password, { target: { value: "p@ssw0rd" }})

  screen.getByText(/Login/).click()

  const message = screen.getByText(/You logged in with/)
  expect(message.textContent).toContain("guest")
  expect(message.textContent).toContain("p@ssw0rd")
});

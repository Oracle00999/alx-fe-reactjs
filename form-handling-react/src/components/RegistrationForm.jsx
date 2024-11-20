import React, { useState } from "react";

const RegistrationForm = () => {
  // State variables for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State variable for error messages
  const [error, setError] = useState("");

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // Clear the error if all fields are valid
    setError("");

    // Handle form data (e.g., send to an API)
    console.log("Form Submitted:", { username, email, password });
    alert("Registration successful!");

    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

import { useState } from "react";
import { loginUser } from "../services/authService";
import { saveToken } from "../utils/auth";
function login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const data = await loginUser(formData);
      saveToken(data.token);
      console.log("Login successful");
      console.log(data);
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          ></input>
        </div>
        <button>Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
export default login;

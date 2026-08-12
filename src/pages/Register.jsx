import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    try {
      const data = await registerUser({ ...formData, role: "Customer" });
      setMessage("Registration successful");

      console.log(data);
    } catch (error) {
      setError("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" onSubmit={handleSubmit}>
          Register
        </button>
      </form>

      {message && <p>{message}</p>}

      {error && <p>{error}</p>}
    </div>
  );
}

export default Register;
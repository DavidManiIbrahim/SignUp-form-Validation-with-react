import { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,  // spread the existing form data
      [name]: value  // update the specific field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.username) {
      validationErrors.username = "Username is required";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        {errors.username && <span>{errors.username}</span>}
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && <span>{errors.email}</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        {errors.password && <span>{errors.password}</span>}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <br />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        <p>
          Lost password? <a href="#">click here</a>
        </p>
        <button type="submit" className="login-btn">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;

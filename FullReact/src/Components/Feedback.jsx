import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css';
import './RecipeCategory.css'; // Reuse the CSS for the navbar

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Thank you for your feedback!');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="https://tse3.mm.bing.net/th?id=OIP.F7UsIk-vANk4F0Cd_NU7yAHaHa&pid=Api&P=0&h=180" alt="Delicious Logo" />
          <h1>Delicious</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" target="_blank">About Us</Link></li>
          <li><Link to="/feedback" target="_blank">FeedBack</Link></li>
        </ul>
        <div className="nav-right"></div>
      </nav>

      <div className="feedback-form-wrapper">
        <div className="feedback-form-card">
          <h2>Share Your Feedback!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
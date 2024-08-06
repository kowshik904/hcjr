import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className='full'>
      <nav className="navbar">
        <div className="logo">
          <img src="https://tse3.mm.bing.net/th?id=OIP.F7UsIk-vANk4F0Cd_NU7yAHaHa&pid=Api&P=0&h=180" alt="Delicious Logo" /> {/* Replace with actual logo path */}
          <h1>Delicious</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => getCate()} target="_blank">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/feedback" target="_blank">Feedback</Link></li>
        </ul>
      </nav>
      <div className="about-us-container">
    
    <header className="about-us-header">
      <h1>About Us</h1>
    </header>
    <section className="about-us-content">
      <p>Welcome to <strong>Savory Secrets</strong>!</p>
      <p>
        At <strong>Savory Secrets</strong>, we believe that cooking is more than just a task—it’s an experience that brings people together, sparks creativity, and nourishes the soul. Our mission is to make the art of cooking accessible and enjoyable for everyone, whether you're a seasoned chef or just starting out in the kitchen.
      </p>
      <h2>What We Offer</h2>
      <ul>
        <li><strong>Diverse Recipes:</strong> From quick weeknight dinners to elaborate holiday feasts, our extensive recipe collection caters to all tastes and dietary preferences. Explore everything from classic comfort foods to innovative culinary creations.</li>
        <li><strong>Cooking Tips and Techniques:</strong> Whether you’re looking to perfect your knife skills or master the art of baking, our expert advice and step-by-step guides will help you cook with confidence.</li>
        <li><strong>Meal Planning and Inspiration:</strong> Get inspired by our curated meal plans and seasonal recipes designed to make your life easier and more delicious.</li>
        <li><strong>Community and Support:</strong> Join a vibrant community of food lovers where you can share your own recipes, ask questions, and get feedback from others who share your passion for cooking.</li>
      </ul>
      <h2>Our Commitment</h2>
      <p>
        We’re committed to providing high-quality, trustworthy content that enhances your cooking experience. Our team rigorously tests every recipe and ensures that our tips and techniques are both practical and effective.
      </p>
      <h2>Join Us</h2>
      <p>
        We invite you to explore our platform, try out our recipes, and become a part of our growing community. Share your cooking adventures with us, and let’s make every meal a delightful experience!
      </p>
      <p>Thank you for visiting <strong>Savory Secrets</strong>. We’re excited to cook up something amazing with you!</p>
      <p>Happy Cooking,</p>
      <p>The <strong>Savory Secrets</strong> Team</p>
      

    </section>
  </div>
  </div>
  );
}

export default AboutUs;

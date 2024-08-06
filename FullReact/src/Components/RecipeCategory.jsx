import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RecipeCategory.css';

const RecipeCategory = () => {
  const [cate, setCate] = useState([]);
v
  useEffect(() => {
    getCate();
  }, []);

  async function getCate() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const data = await res.json();
    const descriptions = data.meals.map(category => ({
      name: category.Ingredient,
      image: category.strCategoryThumb,
      path: `/${category.strCategory.toLowerCase()}`
    }));
    setCate(descriptions);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="https://tse3.mm.bing.net/th?id=OIP.F7UsIk-vANk4F0Cd_NU7yAHaHa&pid=Api&P=0&h=180" alt="Delicious Logo" /> {/* Replace with actual logo path */}
          <h1>Delicious</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/" onClick={()=>getCate()}>Home</Link></li>
          <li><Link to="/about" target="_blank">About Us</Link></li>
          <li><Link to="/feedback" target="_blank">FeedBack</Link></li>
        
        </ul>
        <div className="nav-right"></div> {/* Placeholder for extra space */}
      </nav>
      <br/>
      <br/>
      <div className="category-container">
        {cate.map((item, index) => (
          <div key={index} className="category-item">
            <h1 className='category-title'>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <div className='view-recipes'>
              <Link to={item.path} target="_blank">View Recipes</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeCategory;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Chicken.css';
const Lamb = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getBee();
  }, []);
  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push({ ingredient: meal[`strIngredient${i}`], measure: meal[`strMeasure${i}`] });
      }
    }
    return ingredients;
  };

  async function getBee(search) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(search)}`);
    const data = await res.json();
    const descriptions = data.meals.map(meal => ({
      name: meal.strMeal,
      image: meal.strMealThumb,
      instructions: meal.strInstructions,
      youtube:meal.strYoutube,
      ingredients: getIngredients(meal)
    }));
    setRecipes(descriptions);
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      getBee(value);
    } else {
      setRecipes([]);
    }
  };
  const splitInstructions = (instructions) => {
    return instructions.split('.').filter(sentence => sentence.trim() !== '').map(sentence => sentence.trim() + '.');
  };
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className='full'>
      <nav className="navbar">
        <div className="logo">
          <img src="https://tse3.mm.bing.net/th?id=OIP.F7UsIk-vANk4F0Cd_NU7yAHaHa&pid=Api&P=0&h=180" alt="Delicious Logo" /> {/* Replace with actual logo path */}
          <h1>Delicious</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/"  onClick={()=>getCate()}>Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/feedback">FeedBack</Link></li>
        </ul>
      </nav>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="search-bar-container">
        <label htmlFor="search" className='beefrecipe'> Search For Lamb Recipes </label>
        <input type="text" id="search" value={searchTerm} onChange={handleInputChange} className='search-input' placeholder="Enter recipe name..."/>
      </div>
      <div className="search-results">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-item">
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
            <p><strong>Instructions:</strong></p>
            <ul className='instructions'>
              {splitInstructions(recipe.instructions).map((sentence, idx) => (
                <li key={idx}>{sentence}</li>
              ))}
            </ul>
            <p><strong>Ingredients:</strong></p>
            <table className='ingredients'>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {recipe.ingredients.map((ingredient, idx) => (
                  <tr key={idx}>
                    <td>{ingredient.ingredient}</td>
                    <td>{ingredient.measure}</td>
                  </tr>
                ))
                }
              </tbody>
            </table>
            {recipe.youtube && (
              <div className="youtube-video">
                <h3>Watch on YouTube:</h3>
                <iframe
                  width="560"
                  height="315"
                  src={getYouTubeEmbedUrl(recipe.youtube)}
                  title={`YouTube video: ${recipe.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lamb;

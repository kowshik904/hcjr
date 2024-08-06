// src/components/NewRecipeForm.js

import React, { useState } from 'react';
import axios from 'axios';

const NewRecipeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    area: '',
    instructions: '',
    thumbnail: '',
    tags: '',
    youtube: '',
    ingredients: [{ ingredient: '', measure: '' }],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientChange = (index, e) => {
    const newIngredients = formData.ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [e.target.name]: e.target.value };
      }
      return ingredient;
    });
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { ingredient: '', measure: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://www.themealdb.com/api/json/v1/1/add.php', formData);
      console.log('New recipe added:', response.data);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Recipe Name" onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" onChange={handleChange} />
      <input type="text" name="area" placeholder="Area" onChange={handleChange} />
      <textarea name="instructions" placeholder="Instructions" onChange={handleChange} />
      <input type="text" name="thumbnail" placeholder="Thumbnail URL" onChange={handleChange} />
      <input type="text" name="tags" placeholder="Tags" onChange={handleChange} />
      <input type="text" name="youtube" placeholder="YouTube Link" onChange={handleChange} />

      {formData.ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            name="ingredient"
            placeholder="Ingredient"
            value={ingredient.ingredient}
            onChange={(e) => handleIngredientChange(index, e)}
          />
          <input
            type="text"
            name="measure"
            placeholder="Measure"
            value={ingredient.measure}
            onChange={(e) => handleIngredientChange(index, e)}
          />
        </div>
      ))}
      <button type="button" onClick={addIngredient}>Add Ingredient</button>

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default NewRecipeForm;

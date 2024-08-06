import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeCategory from './Components/RecipeCategory';
import Beef from './Components/Beef';
import Chicken from './Components/Chicken';
import AboutUs from './Components/AboutUs';
import Dessert from './Components/Dessert';
import Feedback from './Components/Feedback';
import Lamb from './Components/Lamb';
import Miscellaneous from './Components/Miscellaneous';
import Pasta from './Components/Pasta';
import Pork from './Components/Pork';
import SeaFood from './Components/SeaFood';
import Starter from './Components/Starter';
import Vegan from './Components/Vegan';
import Vegetarian from './Components/Vegetarian';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeCategory />} />
        <Route path="/beef" element={<Beef />} />
        <Route path="/chicken" element={<Chicken/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/dessert" element={<Dessert/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/lamb" element={<Lamb/>}/>
        <Route path="/miscellaneous" element={<Miscellaneous/>}/>
        <Route path="/pasta" element={<Pasta/>}/>
        <Route path="/pork" element={<Pork/>}/>
        <Route path="/seafood" element={<SeaFood/>}/>
        <Route path="/starter" element={<Starter/>}/>
        <Route path="/vegan" element={<Vegan/>}/>
        <Route path="/vegetarian" element={<Vegetarian/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;

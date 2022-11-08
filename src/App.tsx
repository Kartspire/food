import axios from 'axios';
import './styles/main.global.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ButtonColor } from './components/Button';
import { CardsList } from './components/CardsList';
import { Card } from './components/CardsList/Card';
import { Loader, LoaderSize } from './components/Loader';
import { WithLoader } from './components/WithLoader';
import { Dropdown } from './components/Dropdown';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [recipesArr, setRecipesArr] = useState([]);

  const dropdownRecipesHandler = (recipeType: string) => {
    console.log(recipeType);
    setLoading((prev) => !prev);
    const getRecipes = async () => {
      const recipes = await axios({
        method: 'get',
        // url: 'https://api.spoonacular.com/food/ingredients/search?apiKey=9c3b5bc6a42a4f14949445caa1b31477',
        url: `https://api.spoonacular.com/food/search?query=${recipeType}&number=15&apiKey=9c3b5bc6a42a4f14949445caa1b31477`,
      });
      return recipes;
    };
    getRecipes().then((res) => {
      console.log(res);
      setLoading((prev) => !prev);
      setRecipesArr(res.data.searchResults[0].results);
      console.log(res.data.searchResults[0].results);
    });
  };

  const cardBtnHandler = () => {
    console.log('Card info');
  };

  return (
    <div className="container">
      <Dropdown
        menu={['pizza', 'apple', 'burger']}
        defaultValue="Выбрать категорию"
        onClick={dropdownRecipesHandler}
      ></Dropdown>
      <CardsList recipes={recipesArr} cardClick={cardBtnHandler}></CardsList>
    </div>
  );
};

import axios from 'axios';
import './styles/main.global.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ButtonColor } from './components/Button';
import { CardsList } from './components/CardsList';
import { Card } from './components/CardsList/Card';
import { Loader, LoaderSize } from './components/Loader';
import { WithLoader } from './components/WithLoader';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [recipesArr, setRecipesArr] = useState([]);
  const buttonHandler = () => {
    setLoading((prev) => !prev);
    const getRecipes = async () => {
      const recipes = await axios({
        method: 'get',
        // url: 'https://api.spoonacular.com/food/ingredients/search?apiKey=9c3b5bc6a42a4f14949445caa1b31477',
        url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=9c3b5bc6a42a4f14949445caa1b31477',
      });
      return recipes;
    };
    getRecipes().then((res) => {
      setLoading((prev) => !prev);
      setRecipesArr(res.data.results);
      console.log(res.data.results);
    });
    console.log(loading);
  };
  const cardHandler = () => {
    console.log('Card info');
  };
  return (
    <div className="container">
      <WithLoader loading={false}>
        <div>Привет как дела</div>
      </WithLoader>
      <Button
        color={ButtonColor.primary}
        loading={loading}
        onClick={buttonHandler}
        disabled={loading}
      >
        заказать
      </Button>
      <CardsList recipes={recipesArr} cardClick={cardHandler}></CardsList>
    </div>
  );
};

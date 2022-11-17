import axios from 'axios';
import '../../styles/main.global.css';
import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ButtonColor } from '../Button';
import { CardsList } from '../CardsList';
import { Card } from '../CardsList/Card';
import { Loader, LoaderSize } from '../Loader';
import { WithLoader } from '../WithLoader';
import { Dropdown } from '../Dropdown';
import { Search } from '../Search';

export function Main() {
  interface IRecipeArr {
    id: number;
    name: string;
    image: string;
    imageType: string;
    content: string;
  }
  type RecipesArrType = Array<IRecipeArr>;

  const [loading, setLoading] = useState(false);
  const [recipesArr, setRecipesArr] = useState<RecipesArrType>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const dropdownRecipesHandler = (recipeType: string) => {
    console.log(recipeType);
    setLoading((prev) => !prev);
    const getRecipes = async () => {
      const recipes = await axios({
        method: 'get',
        // url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=9c3b5bc6a42a4f14949445caa1b31477`,
        url: `https://api.spoonacular.com/food/search?query=${recipeType}&number=15&apiKey=9c3b5bc6a42a4f14949445caa1b31477`,
      });
      console.log(recipes);
      setLoading((prev) => !prev);
      setRecipesArr(recipes.data.searchResults[0].results);
    };
    getRecipes();
  };

  const searchedRecipes = useMemo(() => {
    if (recipesArr.length !== 0) {
      return recipesArr.filter((el) =>
        el.name.toLowerCase().includes(searchQuery)
      );
    }
    return recipesArr;
  }, [searchQuery, recipesArr]);

  return (
    <div className="container">
      <Search
        value={searchQuery}
        placeholder="Поиск"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(event.target.value);
          console.log(searchQuery);
        }}
      />
      <WithLoader loading={loading}>
        <Dropdown
          menu={['pizza', 'apple', 'burger']}
          defaultValue="Выбрать категорию"
          onClick={dropdownRecipesHandler}
        ></Dropdown>
      </WithLoader>

      <CardsList recipes={searchedRecipes}></CardsList>
    </div>
  );
}

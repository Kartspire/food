import React from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.module.css';

interface IRecipe {
  id: number;
  image: string;
  imageType: string;
  name: string;
  content: string;
}

interface ICardsList {
  recipes: IRecipe[];
}

export function CardsList({ recipes }: ICardsList) {
  const cards = recipes.map((el) => (
    <Card
      key={el.id}
      id={el.id}
      image={el.image}
      name={el.name}
      content={el.content}
    />
  ));
  return <ul className={styles.cardsList}>{cards}</ul>;
}

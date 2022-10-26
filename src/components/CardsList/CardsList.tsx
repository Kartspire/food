import { link } from 'fs';
import React from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.module.css';

interface IRecipe {
  id: number;
  image: string;
  imageType: string;
  title: string;
}

interface ICardsList {
  recipes: IRecipe[];
  cardClick: React.MouseEventHandler;
}

export function CardsList({ recipes, cardClick }: ICardsList) {
  const cards = recipes.map((el) => (
    <Card key={el.id} image={el.image} title={el.title} onClick={cardClick} />
  ));
  return <ul className={styles.cardsList}>{cards}</ul>;
}

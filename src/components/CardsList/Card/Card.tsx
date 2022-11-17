import { useContext, createContext } from 'react';
import { Button, ButtonColor } from '../../Button';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

interface ICardProps {
  key: number;
  id: number;
  image: string;
  name: string;
  content: string;
}

export const Card = ({ id, image, name, content }: ICardProps) => {
  return (
    <li className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <h3>{name}</h3>
      <Link to={`/info/${id}`} className={styles.info} />
    </li>
  );
};

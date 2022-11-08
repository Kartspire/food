import { Button, ButtonColor } from '../../Button';
import styles from './Card.module.css';
interface ICardProps {
  key: number;
  image: string;
  name: string;
  // ingredients: string;
  // kcal: string;
  onClick: React.MouseEventHandler;
}
export const Card = ({
  image,
  name,
  // ingredients,
  // kcal,
  onClick,
}: ICardProps) => {
  return (
    <li className={styles.card}>
      {/* <Rating></Rating> */}
      <img src={image} alt="" className={styles.image} />
      <h3>{name}</h3>
      {/* <p>{ingredients}</p>
    <span>{kcal}</span> */}
      <Button
        onClick={onClick}
        color={ButtonColor.primary}
        form="roundBtn"
      ></Button>
    </li>
  );
};

import styles from './Card.module.css';
interface ICardProps {
  key: number;
  image: string;
  title: string;
  // ingredients: string;
  // kcal: string;
  onClick: React.MouseEventHandler;
}
export const Card = ({
  image,
  title,
  // ingredients,
  // kcal,
  onClick,
}: ICardProps) => {
  return (
    <li onClick={onClick} className={styles.card}>
      {/* <Rating></Rating> */}
      <img src={image} alt="" className={styles.image} />
      <h3>{title}</h3>
      {/* <p>{ingredients}</p>
    <span>{kcal}</span> */}
    </li>
  );
};

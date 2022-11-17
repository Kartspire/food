import { Loader, LoaderSize } from '../Loader';
import styles from './Button.module.css';

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
}

type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  color: ButtonColor;
  form: string;
  key?: number;
  class?: string;
  onClick: React.MouseEventHandler;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles[props.form]} ${
        (props.disabled && styles.disabled) || styles[props.color]
      } ${props.class} `}
      disabled={props.disabled}
    >
      {props.children}
      {props.loading && <Loader size={LoaderSize.s} color="#fff" />}
    </button>
    // <button
    //   onClick={props.onClick}
    //   className={`${styles.button} ${
    //     (props.disabled && styles.disabled) || styles[props.color]
    //   }`}
    //   disabled={props.disabled}
    // >
    //   {props.children}
    //   {props.loading && <Loader size={LoaderSize.s} color="#fff" />}
    // </button>
  );
};

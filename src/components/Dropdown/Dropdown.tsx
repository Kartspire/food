import React, { Children, useState } from 'react';
import { Button, ButtonColor } from '../Button';
import styles from './dropdown.module.css';

type DropdownProps = React.PropsWithChildren<{
  menu: string[];
  defaultValue: string;
  onClick(prop: string): void;
}>;

export const Dropdown = ({ menu, defaultValue, onClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownControlHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const searchRecipes = menu.map((el, index) => (
    <Button
      key={index}
      color={ButtonColor.secondary}
      form="standardBtn"
      onClick={() => {
        onClick(el);
        setIsOpen((prev) => !prev);
      }}
    >
      {el}
    </Button>
  ));
  return (
    <div className={styles.dropdownContainer}>
      <Button
        class={styles.select}
        onClick={dropdownControlHandler}
        form="standardBtn"
        color={ButtonColor.secondary}
      >
        Выберите рецепт
      </Button>
      {isOpen && <div className={styles.optionsContainer}>{searchRecipes}</div>}
    </div>
  );
};

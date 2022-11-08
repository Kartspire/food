import React, { Children, useState } from 'react';
import { Button, ButtonColor } from '../Button';
import styles from './dropdown.module.css';

type DropdownProps = React.PropsWithChildren<{
  menu: string[];
  defaultValue: string;
  onClick(prop: string): React.MouseEventHandler;
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
      form="standard"
      onClick={(el) => onClick(el)}
    >
      {el}
    </Button>
  ));
  return (
    <Button
      onClick={() => setIsOpen((prev) => !prev)}
      form="standard"
      color={ButtonColor.secondary}
    >
      {isOpen ?? searchRecipes}
    </Button>
  );
};

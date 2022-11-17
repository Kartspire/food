import React, { useState } from 'react';
import styles from './search.module.css';

interface ISearch {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
}

export function Search({ value, placeholder, onChange }: ISearch) {
  // const [value, setValue] = useState('');
  return (
    <input
      className={styles.search}
      type="text"
      value={value}
      placeholder={placeholder}
      // onChange={(event) => setValue(event.target.value)}
      onChange={onChange}
      // value={value}
    />
  );
}

import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import '../../styles/main.global.css';
import axios from 'axios';
import styles from './info.module.css';

export function Info() {
  interface IInfo {
    title: string;
    image: string;
    instructions: string;
  }

  const { id } = useParams();

  const [info, setInfo] = useState<IInfo>({
    title: '',
    image: '',
    instructions: '',
  });

  const getInfo = async () => {
    const info = await axios({
      method: 'get',
      url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=9c3b5bc6a42a4f14949445caa1b31477`,
    });
    console.log(info.data);
    setInfo(info.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="container">
      <Link to="/" className={styles.back}></Link>
      <h3>{info.title}</h3>
      <img src={info.image} alt="" />
      <p>{info.instructions}</p>
    </div>
  );
}

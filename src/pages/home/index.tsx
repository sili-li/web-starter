import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../../lib/api';
import logo from '../../logo.svg';
import styles from './index.module.css';

const Home = () => {
  const history = useHistory();
  const [linkTitle, setLinkTitle] = useState<string>();

  useEffect(() => {
    setLinkTitle('进入内页');
  }, []);

  // useEffect(() => {
  //   Api.get('/api/test')
  //     .then((res) => {
  //       //save data
  //     })
  //     .catch((error) => {
  //       // show error message
  //     });
  // }, []);

  // useEffect(() => {
  //   Api.post('/api/test', {
  //     params: { id: '122334' },
  //   })
  //     .then((res) => {
  //       //save data
  //     })
  //     .catch((error) => {
  //       // show error message
  //     });
  // }, []);

  const goToTestPage = () => {
    history.push({ pathname: 'test', state: { id: '13' } });
  };

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>hello word, welcome to react web starter</p>
        <div onClick={goToTestPage} className={styles.link}>
          {linkTitle}
        </div>
      </header>
    </div>
  );
};

export default Home;

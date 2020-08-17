import React from 'react';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

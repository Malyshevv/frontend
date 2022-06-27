import React from 'react';
import styles from './notfound.css';

export function NotFound() {
  return (
      <div className={styles.error}>
        <h1>ERROR 404</h1>
        <p>PAGE NOT FOUND!</p>
      </div>
  );
}

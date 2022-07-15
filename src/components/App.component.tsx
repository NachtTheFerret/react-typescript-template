import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import type { FC } from 'react';

import styles from './App.module.scss';

export default (() => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(null);

  return (
    <BrowserRouter>

      <div className={styles.body}>
        <Routes>
          <Route index />
          <Route />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}) as FC<{}>;

import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Info } from './components/Info';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />}>
          <Route path=":id" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

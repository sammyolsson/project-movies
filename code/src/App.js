import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { NavBar } from 'components/NavBar/NavBar';
import { PopularList } from './components/PopularList/PopularList';
import { NotFound } from './components/NotFound/NotFound';
import { SingleMovie } from './components/SingleMovie/SingleMovie';

export const App = () => {
  const API_KEY = '0bdc909b4c34b17568b8111077d9d4d62'

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/movies/popular" />} />
        <Route path="/movies/:type" element={<PopularList />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404/" />} />
      </Routes>
    </BrowserRouter>
  );
};

// API KEY: bdc909b4c34b17568b8111077d9d4d62
// Exempel på API-begäran: https://api.themoviedb.org/3/movie/550?api_key=bdc909b4c34b17568b8111077d9d4d62
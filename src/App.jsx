import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MoviesList from './components/MoviesList';
import SeriesList from './components/SeriesList';

import data from './assets/data/data.json';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import BannerSpashConditional from './components/BannerSpashConditional';

function App() {
  return (
    <>
      <Router>
        <div className="main w-screen bg-black">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Navigate to="/" replace />} />
            <Route path="/movies" element={<MoviesList data={data} />} />
            <Route path="/series" element={<SeriesList data={data} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BannerSpashConditional/>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

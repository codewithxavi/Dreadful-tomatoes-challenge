import React from 'react'
import { useState } from 'react';

const SeriesList = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const handleImageClick = (film) => {
    setSelectedFilm(film);
    setModalOpen(true);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFilms = data.entries
    .filter(
      film =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        film.programType === 'series'
    );

  const handleButton1Click = () => {
    setStart(0);
    setEnd(10);
  };

  const handleButton2Click = () => {
    setStart(10);
    setEnd(20);
  };

  const handleButton3Click = () => {
    setStart(20);
    setEnd(30);
  };

  const handleLeftArrowClick = () => {
    console.log("Hola")
    if (start > 0) {
      setStart(start - 10);
      setEnd(end - 10);
    }
  };

  const handleRightArrowClick = () => {
    if (end < filteredFilms.length) {
      setStart(start + 10);
      setEnd(end + 10);
    }
  };

  

  return (
    <>
      <div className='max-w-screen mx-auto bg-red-600 py-8 '>
        <div className='mx-auto max-w-7xl '>
          <input
            type="text"
            placeholder="Title"
            onChange={handleSearchChange}
            value={searchTerm}
            className="w-full p-2 rounded border border-gray-300 outline-none transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className='text-white font-bold max-w-7xl mx-auto bg-gray-950'>
        <h2 className='text-white font-semibold text-3xl max-w-7xl mx-auto py-8'>Popular Movies</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto'>
          {filteredFilms.slice(start, end).map(film => (
            <div key={film.title} className="bg-black shadow-md rounded flex flex-col group relative">
              <img
                src={film.images.posterArt.url}
                alt={film.title}
                className="w-full flex-grow object-cover mb-4"
                onClick={() => handleImageClick(film)}
              />
              <h2 className="text-base text-white absolute bottom-0 bg-black opacity-95 w-full">{film.title}</h2>
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-in-out"></div>
              <div className="text-white absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 className="text-xl font-semibold mb-2 relative">{film.title}
                  <span className="block h-1 w-20 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
                  <span className="block h-2 w-24 bg-white bg-opacity-50 absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
                </h2>
                <p className='line-clamp-5'>
                  {film.releaseYear} <br /> {film.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center flex gap-2 justify-center py-10'>
          <button onClick={handleLeftArrowClick}>
            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 14a2 2 0 110-4 2 2 0 010 4zM15 12H2m0 0l3-3m-3 3l3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
          <button onClick={handleButton1Click} className='bg-red-600 text-white w-10 rounded-full'>1</button>
          <button onClick={handleButton2Click} className='bg-red-600 text-white w-10 rounded-full'>2</button>
          <button onClick={handleButton3Click} className='bg-red-600 text-white w-10 rounded-full'>3</button>
          <button onClick={handleRightArrowClick}>
            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M4 14a2 2 0 110-4 2 2 0 010 4zM9 12h13m0 0l-3-3m3 3l-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
        </div>
      </div>


    </>
  );
};

export default SeriesList;

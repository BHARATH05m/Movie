import React from 'react';
import './ActionMovies.css';

// Import images (to be added later)
import vikram from './images/vikram.jpg';
import kaithi from './images/kaithi.jpg';
import thaniOruvan from './images/thani_oruvan.jpg';
import maanagaram from './images/maanagaram.jpg';
import asuran from './images/asuran.jpg';
import vettaiyaadu from './images/vettaiyaadu_vilaiyaadu.jpg';
import theeran from './images/theeran_adhigaaram_ondru.jpg';
import master from './images/master.jpg';
import vikramVedha from './images/vikram_vedha.jpg';
import petta from './images/petta.jpg';

const movies = [
  {
    title: 'Vikram',
    year: 2022,
    actors: 'Kamal Haasan, Vijay Sethupathi',
    director: 'Lokesh Kanagaraj',
    poster: vikram,
    trailer: 'https://www.youtube.com/watch?v=OKBMCL-frPU'
  },
  {
    title: 'Kaithi',
    year: 2019,
    actors: 'Karthi',
    director: 'Lokesh Kanagaraj',
    poster: kaithi,
    movieLink: 'https://www.youtube.com/playlist?list=PL5fQpj_-RqoRPQ1ZPonU9ZPO5PBZ4m62r'
  },
  {
    title: 'Thani Oruvan',
    year: 2015,
    actors: 'Jayam Ravi, Arvind Swami',
    director: 'Mohan Raja',
    poster: thaniOruvan,
    trailer: 'https://www.youtube.com/watch?v=r5Lih8rKd6k'
  },
  {
    title: 'Maanagaram',
    year: 2017,
    actors: 'Sundeep Kishan',
    director: 'Lokesh Kanagaraj',
    poster: maanagaram,
    movieLink: 'https://www.youtube.com/watch?v=-GOSSQlSgnE'
  },
  {
    title: 'Asuran',
    year: 2019,
    actors: 'Dhanush',
    director: 'Vetrimaaran',
    poster: asuran,
    movieLink: 'https://www.youtube.com/watch?v=M9h2AU9Xl54'
  },
  {
    title: 'Vettaiyaadu Vilaiyaadu',
    year: 2006,
    actors: 'Kamal Haasan',
    director: 'Gautham Vasudev Menon',
    poster: vettaiyaadu,
    movieLink: 'https://www.youtube.com/watch?v=9fwsbpjGKN8'
  },
  {
    title: 'Theeran Adhigaaram Ondru',
    year: 2017,
    actors: 'Karthi',
    director: 'H. Vinoth',
    poster: theeran,
    movieLink: 'https://www.youtube.com/watch?v=gtGWZXeqkIc'
  },
  {
    title: 'Master',
    year: 2021,
    actors: 'Vijay, Vijay Sethupathi',
    director: 'Lokesh Kanagaraj',
    poster: master,
    trailer: 'https://www.youtube.com/watch?v=CpZvu-MuN54'
  },
  {
    title: 'Vikram Vedha',
    year: 2017,
    actors: 'Madhavan, Vijay Sethupathi',
    director: 'Pushkar–Gayathri',
    poster: vikramVedha,
    trailer: 'https://www.youtube.com/watch?v=Q4RlSK3gIbk'
  },
  {
    title: 'Petta',
    year: 2019,
    actors: 'Rajinikanth',
    director: 'Karthik Subbaraj',
    poster: petta,
    trailer: 'https://www.youtube.com/watch?v=udCeXkg1eaM'
  }
];

const ActionMovies = ({ search = '' }) => {
  const filteredMovies = movies.filter(movie => {
    const term = search.toLowerCase();
    return (
      movie.title.toLowerCase().includes(term) ||
      movie.actors.toLowerCase().includes(term) ||
      movie.director.toLowerCase().includes(term)
    );
  });
  return (
    <div className="action-movies-container">
      {filteredMovies.map((movie, idx) => (
        <div className="movie-card" key={idx}>
          <div className="movie-poster">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title} ({movie.year})</h3>
              <p><strong>Actors:</strong> {movie.actors}</p>
              <p><strong>Director:</strong> {movie.director}</p>
              {movie.movieLink && (
                <a
                  href={movie.movieLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="movie-btn"
                >
                  Watch Movie
                </a>
              )}
              {!movie.movieLink && movie.trailer && (
                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trailer-btn"
                >
                  Watch Trailer
                </a>
              )}
            </div>
          </div>
          <div className="movie-title-under-poster">{movie.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ActionMovies; 
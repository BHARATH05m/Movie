import React from 'react';
import './ThrillerMovies.css';

// Import images (to be added later)
import ratsasan from './images/ratsasan.jpg';
import anniyan from './images/anniyan.jpg';
import imaikkaaNodigal from './images/imaikkaa_nodigal.jpg';
import dhuruvangalPathinaaru from './images/dhuruvangal_pathinaaru.jpg';
import thadam from './images/thadam.jpg';
import superDeluxe from './images/super_deluxe.jpg';
import gameOver from './images/game_over.jpg';
import andhaghaaram from './images/andhaghaaram.jpg';
import oomaiVizhigal from './images/oomai_vizhigal.jpg';
import eeram from './images/eeram.jpg';

const movies = [
  {
    title: 'Ratsasan',
    year: 2018,
    actors: 'Vishnu Vishal',
    director: 'Ram Kumar',
    poster: ratsasan,
    movieLink: 'https://www.youtube.com/watch?v=sodckW8XzCo'
  },
  {
    title: 'Anniyan',
    year: 2005,
    actors: 'Vikram',
    director: 'S. Shankar',
    poster: anniyan,
    trailer: 'https://www.youtube.com/watch?v=bzAxJDtS7zE'
  },
  {
    title: 'Imaikkaa Nodigal',
    year: 2018,
    actors: 'Nayanthara, Anurag Kashyap',
    director: 'R. Ajay Gnanamuthu',
    poster: imaikkaaNodigal,
    trailer: 'https://www.youtube.com/watch?v=Q0QoCgbwPjs'
  },
  {
    title: 'Dhuruvangal Pathinaaru',
    year: 2016,
    actors: 'Rahman',
    director: 'Karthick Naren',
    poster: dhuruvangalPathinaaru,
    movieLink: 'https://www.youtube.com/watch?v=qXyXJsViyGE'
  },
  {
    title: 'Thadam',
    year: 2019,
    actors: 'Arun Vijay',
    director: 'Magizh Thirumeni',
    poster: thadam,
    movieLink: 'https://www.youtube.com/watch?v=6ZjhVjVnJcw'
  },
  {
    title: 'Super Deluxe',
    year: 2019,
    actors: 'Vijay Sethupathi, Samantha',
    director: 'Thiagarajan Kumararaja',
    poster: superDeluxe,
    trailer: 'https://www.youtube.com/watch?v=3-Xq_Zz3nPA'
  },
  {
    title: 'Game Over',
    year: 2019,
    actors: 'Taapsee Pannu',
    director: 'Ashwin Saravanan',
    poster: gameOver,
    trailer: 'https://www.youtube.com/watch?v=JUswBxwJvaQ'
  },
  {
    title: 'Andhaghaaram',
    year: 2020,
    actors: 'Arjun Das',
    director: 'V. Vignarajan',
    poster: andhaghaaram,
    movieLink: 'https://www.youtube.com/watch?v=ljdvd3Qp6Ck'
  },
  {
    title: 'Oomai Vizhigal',
    year: 1986,
    actors: 'Vijayakanth',
    director: 'R. Aravindraj',
    poster: oomaiVizhigal,
    movieLink: 'https://www.youtube.com/watch?v=K0sDeln8WUE'
  },
  {
    title: 'Eeram',
    year: 2009,
    actors: 'Aadhi',
    director: 'Arivazhagan Venkatachalam',
    poster: eeram,
    movieLink: 'https://www.youtube.com/watch?v=RwzfXMs5WtM'
  }
];

const ThrillerMovies = ({ search = '' }) => {
  const filteredMovies = movies.filter(movie => {
    const term = search.toLowerCase();
    return (
      movie.title.toLowerCase().includes(term) ||
      movie.actors.toLowerCase().includes(term) ||
      movie.director.toLowerCase().includes(term)
    );
  });
  return (
    <div className="thriller-movies-container">
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

export default ThrillerMovies; 
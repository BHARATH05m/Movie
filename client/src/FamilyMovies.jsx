import React from 'react';
import './FamilyMovies.css';

// Import images (to be added later)
import thangamagan from './images/thangamagan.jpg';
import vaaranamAayiram from './images/vaaranam_aayiram.jpg';
import mozhi from './images/mozhi.jpg';
import abhiyumNaanum from './images/abhiyum_naanum.jpg';
import kadaikuttySingam from './images/kadaikutty_singam.jpg';
import deivaThirumagal from './images/deiva_thirumagal.jpg';
import nammaVeettuPillai from './images/namma_veettu_pillai.jpg';
import pasanga from './images/pasanga.jpg';
import appa from './images/appa.jpg';
import uthamaputhiran from './images/uthamaputhiran.jpg';

const movies = [
  {
    title: 'Thangamagan',
    year: 2015,
    actors: 'Dhanush, Samantha',
    director: 'Velraj',
    poster: thangamagan,
    movieLink: 'https://www.youtube.com/watch?v=EcqkQbGQmgk'
  },
  {
    title: 'Vaaranam Aayiram',
    year: 2008,
    actors: 'Suriya',
    director: 'Gautham Vasudev Menon',
    poster: vaaranamAayiram,
    movieLink: 'https://www.youtube.com/watch?pp=0gcJCf0Ao7VqN5tD&v=XYDoK3rH1to'
  },
  {
    title: 'Mozhi',
    year: 2007,
    actors: 'Prithviraj, Jyothika',
    director: 'Radha Mohan',
    poster: mozhi,
    movieLink: 'https://www.youtube.com/watch?v=OhNDoZLPW-I'
  },
  {
    title: 'Abhiyum Naanum',
    year: 2008,
    actors: 'Prakash Raj',
    director: 'Radha Mohan',
    poster: abhiyumNaanum,
    movieLink: 'https://www.youtube.com/watch?pp=0gcJCdgAo7VqN5tD&v=TBCvQOO--IY'
  },
  {
    title: 'Kadaikutty Singam',
    year: 2018,
    actors: 'Karthi',
    director: 'Pandiraj',
    poster: kadaikuttySingam,
    trailer: 'https://www.youtube.com/watch?v=v5YO-Zred7w'
  },
  {
    title: 'Deiva Thirumagal',
    year: 2011,
    actors: 'Vikram',
    director: 'A. L. Vijay',
    poster: deivaThirumagal,
    movieLink: 'https://www.youtube.com/watch?v=fWR1ajUYSlM'
  },
  {
    title: 'Namma Veettu Pillai',
    year: 2019,
    actors: 'Sivakarthikeyan',
    director: 'Pandiraj',
    poster: nammaVeettuPillai,
    movieLink: 'https://www.youtube.com/watch?v=DGT9Jzf0nEM'
  },
  {
    title: 'Pasanga',
    year: 2009,
    actors: 'Kishore, Vimal',
    director: 'Pandiraj',
    poster: pasanga,
    movieLink: 'https://www.youtube.com/watch?v=hHaYR3GVx_E'
  },
  {
    title: 'Appa',
    year: 2016,
    actors: 'Samuthirakani, Thambi Ramaiah',
    director: 'Samuthirakani',
    poster: appa,
    movieLink: 'https://www.youtube.com/watch?v=nbA8IgD-sDs'
  },
  {
    title: 'Uthamaputhiran',
    year: 2010,
    actors: 'Dhanush, Genelia',
    director: 'Mithran R. Jawahar',
    poster: uthamaputhiran,
    movieLink: 'https://www.youtube.com/watch?v=guUHAyvt-9w'
  }
];

const FamilyMovies = ({ search = '' }) => {
  const filteredMovies = movies.filter(movie => {
    const term = search.toLowerCase();
    return (
      movie.title.toLowerCase().includes(term) ||
      movie.actors.toLowerCase().includes(term) ||
      movie.director.toLowerCase().includes(term)
    );
  });
  return (
    <div className="family-movies-container">
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

export default FamilyMovies; 
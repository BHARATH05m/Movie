import React from 'react';
import './ComedyMovies.css';

// Import images directly
import panchathanthiram from './images/panchathanthiram.jpg';
import michaelMadana from './images/michael_madana_kama_rajan.jpg';
import bossEngira from './images/boss_engira_bhaskaran.jpg';
import soodhuKavvum from './images/soodhu_kavvum.jpg';
import kalakalappu from './images/kalakalappu.jpg';
import kanchana from './images/kanchana.jpg';
import thamizhPadam from './images/thamizh_padam.jpg';
import avvaiShanmugi from './images/avvai_shanmugi.jpg';
import naduvulaKonjam from './images/naduvula_konjam_pakkatha_kaanom.jpg';
import varuthapadatha from './images/varuthapadatha_valibar_sangam.jpg';

const movies = [
  {
    title: 'Panchathanthiram',
    year: 2002,
    actors: 'Kamal Haasan, Jayaram',
    director: 'K. S. Ravikumar',
    poster: panchathanthiram,
    movieLink: 'https://www.youtube.com/watch?v=0_LevsirI54'
  },
  {
    title: 'Michael Madana Kama Rajan',
    year: 1990,
    actors: 'Kamal Haasan',
    director: 'Singeetam Srinivasa Rao',
    poster: michaelMadana,
    movieLink: 'https://www.youtube.com/watch?v=9UsGmnr7Ob4'
  },
  {
    title: 'Boss Engira Bhaskaran',
    year: 2010,
    actors: 'Arya, Santhanam',
    director: 'M. Rajesh',
    poster: bossEngira,
    movieLink: 'https://www.youtube.com/watch?v=6mbvEVxVUk4'
  },
  {
    title: 'Soodhu Kavvum',
    year: 2013,
    actors: 'Vijay Sethupathi',
    director: 'Nalan Kumarasamy',
    poster: soodhuKavvum,
    movieLink: 'https://www.youtube.com/watch?v=jR4lVwqN524'
  },
  {
    title: 'Kalakalappu',
    year: 2012,
    actors: 'Vimal, Shiva',
    director: 'Sundar C.',
    poster: kalakalappu,
    movieLink: 'https://www.youtube.com/watch?v=Q9IJBHbrC3M'
  },
  {
    title: 'Kanchana',
    year: 2011,
    actors: 'Raghava Lawrence',
    director: 'Raghava Lawrence',
    poster: kanchana,
    trailer: 'https://www.youtube.com/watch?v=RlB34Sby0yY'
  },
  {
    title: 'Thamizh Padam',
    year: 2010,
    actors: 'Shiva',
    director: 'C. S. Amudhan',
    poster: thamizhPadam,
    trailer: 'https://www.youtube.com/watch?v=60168gtJLvU'
  },
  {
    title: 'Avvai Shanmugi',
    year: 1996,
    actors: 'Kamal Haasan',
    director: 'K. S. Ravikumar',
    poster: avvaiShanmugi,
    movieLink: 'https://www.youtube.com/playlist?list=PL6eYJImIZdQ7DAOY3odORZ1uLcRevNOjV'
  },
  {
    title: 'Naduvula Konjam Pakkatha Kaanom',
    year: 2012,
    actors: 'Vijay Sethupathi',
    director: 'Balaji Tharaneetharan',
    poster: naduvulaKonjam,
    movieLink: 'https://www.youtube.com/watch?v=5uzYUM1PHDk'
  },
  {
    title: 'Varuthapadatha Valibar Sangam',
    year: 2013,
    actors: 'Sivakarthikeyan',
    director: 'Ponram',
    poster: varuthapadatha,
    movieLink: 'https://www.youtube.com/watch?v=ocM2nojWioQ'
  }
];

const ComedyMovies = ({ search = '' }) => {
  const filteredMovies = movies.filter(movie => {
    const term = search.toLowerCase();
    return (
      movie.title.toLowerCase().includes(term) ||
      movie.actors.toLowerCase().includes(term) ||
      movie.director.toLowerCase().includes(term)
    );
  });
  return (
    <div className="comedy-movies-container">
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

export default ComedyMovies; 
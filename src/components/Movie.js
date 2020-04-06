import React from 'react';
import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres
                    }
                }}
            >
                <img src={poster} alt={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="genres">
                        {genres.map((genres, index) => (
                            <li key={index} className="genres__genre">
                                {genres}
                            </li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary}</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propsTypes = {
    id: PropsTypes.number.isRequired,
    year: PropsTypes.number.isRequired,
    title: PropsTypes.string.isRequired,
    summary: PropsTypes.string.isRequired,
    poster: PropsTypes.string.isRequired,
    genres: PropsTypes.arrayOf(PropsTypes.string).isRequired
};

export default Movie;

import React from 'react';
import './movie-row.css';
import { MovieRowInterface } from './movie-row.interface';

export default ({ title, items }: MovieRowInterface) => {
  return (
    <div>
      <h2>{ title }</h2>
      <div className="movie-row--list">
        { items.results.length > 0 && items.results.map((item, key) => (
          <img src={ `https://image.tmdb.org/t/p/w300${ item.poster_path }` } alt="Imagem do filme"/>
        )) }
      </div>
    </div>
  );
}

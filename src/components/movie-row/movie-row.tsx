import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useState } from 'react';
import './movie-row.css';
import { MovieRowInterface } from './movie-row.interface';

export default ({ title, items }: MovieRowInterface) => {
  const [scrollX, setScrollX] = useState<number>(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0)
      x = 0;
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150; // 150 - image size
    if((window.innerWidth - listWidth) > x)
      x = (window.innerWidth - listWidth) - 60; // 60 - padding
    setScrollX(x);
  };

  return (
    <div className="movie-row">
      <h2>{ title }</h2>

      <div className="movie-row--left" onClick={ handleLeftArrow }>
        <NavigateBeforeIcon style={ { fontSize: 50 } }/>
      </div>
      <div className="movie-row--right" onClick={ handleRightArrow }>
        <NavigateNextIcon style={ { fontSize: 50 } }/>
      </div>

      <div className="movie-row--list-area">
        <div className="movie-row--list" style={ {
          marginLeft: scrollX,
          width: items.results.length * 150,
        } }>
          { items.results.length > 0 && items.results.map((item, key) => (
            <div key={ key } className="movie-row--item">
              <img src={ `https://image.tmdb.org/t/p/w300${ item.poster_path }` } alt="Imagem do filme"/>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}

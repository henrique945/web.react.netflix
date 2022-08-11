import React, { ReactElement } from 'react';
import './featured-movie.css';
import { FeaturedMovieInterface } from './featured-movie.interface';

export default ({ movie }: FeaturedMovieInterface): ReactElement => {

  const firstDate = new Date(movie?.first_air_date || '');
  const genres = [];
  for (let i in movie?.genres) {
    genres.push(movie?.genres[+i].name);
  }

  let description = movie?.overview;
  if(description && description?.length > 200)
    description = description?.substring(0,200) + '...';

  return (
    <section className="featured" style={ {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${ movie?.backdrop_path })`,
    } }>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{ movie?.original_name }</div>
          <div className="featured--info">
            <div className="featured--points">{ movie?.vote_average } pontos</div>
            <div className="featured--year">{ firstDate.getFullYear() }</div>
            <div className="featured--seasons">{ movie?.number_of_seasons } temporada{ movie?.number_of_seasons !== 1 ? 's' : '' }</div>
          </div>
          <div className="featured--description">{ description }</div>
          <div className="featured--buttons">
            <a href={`/watch/${movie?.id}`} className="featured--watch-button">▶ Assistir</a>
            <a href={`/watch/${movie?.id}`} className="featured--my-list-button">+ Minha Lista</a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros:</strong> { genres.join(', ') }
          </div>
        </div>
      </div>
    </section>
  );
}

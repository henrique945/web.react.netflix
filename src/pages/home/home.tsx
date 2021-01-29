import React, { ReactElement, useEffect, useState } from 'react';
import FeaturedMovie from '../../components/featured-movie/featured-movie';
import MovieRow from '../../components/movie-row/movie-row';
import { HomeDataInterface } from '../../interfaces/home-data.interface';
import { MovieDetailInterface } from '../../interfaces/movie-detail.interface';
import Tmdb from '../../services/tmdb';
import './home.css';

function Home(): ReactElement {

  const [movieList, setMovieList] = useState<HomeDataInterface[]>([]);
  const [featuredData, setFeaturedData] = useState<MovieDetailInterface | null>(null);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o filme em destaque
      const originals = list.filter(i => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const chosenMovie = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosenMovie.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  /**
   * Header
   * Destaque
   * As listas
   * Footer
   */
  return (
    <div className="page">

      { featuredData &&
			<FeaturedMovie movie={ featuredData }/>
      }

      <section className="lists">
        { movieList.map((item, key) => (
          <MovieRow key={ key } title={ item.title } items={ item.items }/>
        )) }
      </section>
    </div>
  );
}

export default Home;

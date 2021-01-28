import React, { ReactElement, useEffect, useState } from 'react';
import MovieRow from '../../components/movie-row/movie-row';
import { HomeDataInterface } from '../../interfaces/home-data.interface';
import Tmdb from '../../services/tmdb';
import './home.css';

function Home(): ReactElement {

  const [movieList, setMovieList] = useState<HomeDataInterface[]>([]);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
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
      <section className="lists">
        { movieList.map((item, key) => (
          <MovieRow key={ key } title={ item.title } items={ item.items }/>
        )) }
      </section>
    </div>
  );
}

export default Home;

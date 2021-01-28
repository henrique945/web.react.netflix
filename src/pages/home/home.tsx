import React, { ReactElement, useEffect, useState } from 'react';
import { HomeDataInterface } from '../../interfaces/home-data.interface';
import Tmdb from '../../services/tmdb';

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

  return (
    <p>Hello</p>
  );
}

export default Home;

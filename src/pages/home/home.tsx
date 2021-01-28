import React, { ReactElement, useEffect } from 'react';
import Tmdb from '../../services/tmdb';

function Home(): ReactElement {

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      console.log(list);
    };

    loadAll();
  }, []);

  return (
    <p>Hello</p>
  );
}

export default Home;

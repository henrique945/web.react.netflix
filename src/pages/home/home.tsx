import React, { ReactElement, useEffect, useState } from 'react';
import FeaturedMovie from '../../components/featured-movie/featured-movie';
import Header from '../../components/header/header';
import MovieRow from '../../components/movie-row/movie-row';
import { HomeDataInterface } from '../../interfaces/home-data.interface';
import { MovieDetailInterface } from '../../interfaces/movie-detail.interface';
import Tmdb from '../../services/tmdb';

import './home.css';

function Home(): ReactElement {

  const [movieList, setMovieList] = useState<HomeDataInterface[]>([]);
  const [featuredData, setFeaturedData] = useState<MovieDetailInterface | null>(null);
  const [blackHeader, setBlackHeader] = useState<boolean>(false);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o filme em destaque
      const originals = list.filter(i => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosenMovie = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosenMovie.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10)
        setBlackHeader(true);
      else
        setBlackHeader(false);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  /**
   * Header
   * Destaque
   * As listas
   * Footer
   */
  return (
    <div className="page">

      <Header black={ blackHeader }/>

      { featuredData &&
			  <FeaturedMovie movie={ featuredData }/>
      }

      <section className="lists">
        { movieList.map((item, key) => (
          <MovieRow key={ key } title={ item.title } items={ item.items }/>
        )) }
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤</span> por Henrique Rodrigues<br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org
      </footer>

      { movieList.length <= 0 &&
        <div className="loading">
          <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando..."/>
        </div>
      }
    </div>
  );
}

export default Home;

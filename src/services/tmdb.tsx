import { HomeDataInterface } from '../interfaces/home-data.interface';
import { MovieDetailInterface } from '../interfaces/movie-detail.interface';

const API_KEY = 'b22d3c5aad3fdfadf82f70f1fa39d266';
const API_BASE = 'https://api.themoviedb.org/3';

/**
 * Originais de Netflix
 * Recomendados (trending)
 * Em alta (top rated)
 * Ação
 * Comédia
 * Terror
 * Romance
 * Documentários
 */

const basicFetch = async (endpoint: string) => {
  const req = await fetch(`${ API_BASE }${ endpoint }&language=pt-BR&api_key=${ API_KEY }`);
  return await req.json();
};

const customFetch = async (endpoint: string) => {
  const req = await fetch(`${ API_BASE }${ endpoint }?language=pt-BR&api_key=${ API_KEY }`);
  return await req.json();
};

export default {
  getHomeList: async (): Promise<HomeDataInterface[]> => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch('/discover/tv?with_network=213'),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await customFetch('/trending/all/week'),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await customFetch('/movie/top_rated'),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch('/discover/movie?with_genres=28'),
      },
      {
        slug: 'comedy',
        title: 'Comédio',
        items: await basicFetch('/discover/movie?with_genres=35'),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch('/discover/movie?with_genres=27'),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch('/discover/movie?with_genres=10749'),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch('/discover/movie?with_genres=99'),
      },
    ];
  },
  getMovieInfo: async (movieId: number, type: string): Promise<MovieDetailInterface | null> => {
    let info: MovieDetailInterface | null = null;

    if (!movieId)
      return info;

    switch (type) {
      case 'movie':
        info = await customFetch(`/movie/${ movieId }`);
        break;

      case 'tv':
        info = await customFetch(`/tv/${ movieId }`);
        break;

      default:
        break;
    }

    return info;
  },
};

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

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch('/discover/tv?with_network=213'),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch('/trending/all/week'),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch('/movie/top_rated'),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch('/discovery/movie?with_genres=28'),
      },
      {
        slug: 'comedy',
        title: 'Comédio',
        items: await basicFetch('/discovery/movie?with_genres=35'),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch('/discovery/movie?with_genres=27'),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch('/discovery/movie?with_genres=10749'),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch('/discovery/movie?with_genres=99'),
      },
    ];
  },
};

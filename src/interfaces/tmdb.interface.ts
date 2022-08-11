import { MovieInterface } from './movie.interface';

export interface TmdbInterface {
  page: number;
  results: MovieInterface[];
  total_pages: number;
  total_results: number;
}

import { TmdbInterface } from './tmdb.interface';

export interface HomeDataInterface {
  slug: string;
  title: string;
  items: TmdbInterface;
}

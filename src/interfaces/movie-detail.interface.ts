import { AuthorInterface } from './author.interface';
import { EpisodeInterface } from './episode.interface';
import { GenreInterface } from './genre.interface';
import { SeasonInterface } from './season.interface';

export interface MovieDetailInterface {
  backdrop_path?: string;
  created_by: AuthorInterface[];
  episode_run_time: number[];
  first_air_date: string;
  genres: GenreInterface[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: EpisodeInterface;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  seasons: SeasonInterface[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

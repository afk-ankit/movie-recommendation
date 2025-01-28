// Genre type for movies, as genre_ids in the response refer to these ids.
export type Genre = {
  id: number;
  name: string;
};

// Movie type with all the properties in the response.
export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[]; // Array of genre IDs
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// Response type, includes page and results array of movies.
export type MovieResponse = {
  page: number;
  results: Movie[];
};

export type Video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  type: string;
  // Add other fields present in the object as needed
};

export type VideoResponse = {
  id: number;
  results: Video[];
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  name: string;
};

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  title: string;
};

export type Provider = {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
};

export type InObject = {
  link: string;
  flatrate?: Provider[];
  rent?: Provider[];
  buy?: Provider[];
};

export type WatchResponse = {
  results: {
    IN: InObject;
  };
};

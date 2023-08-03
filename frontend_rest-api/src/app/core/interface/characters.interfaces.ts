export interface Caracters {
  characters: string,
  locations: string,
  episodes: string
}

export interface AllCaracters {
  info: Page,
  results: CaractersAnime[]
}

export interface Page {
  "count":826,
  "pages":42,
  "next": string | null,
  "prev": string | null,
}

export interface CaractersAnime {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Origin,
  location: Location,
  image: string,
  episode: string[],
  url: string,
  created: Date,
}

export interface Origin {
  name: string,
  url: string
}

export interface Location extends Origin {}

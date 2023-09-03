import { CaractersAnime } from "./characters.interfaces"

export interface AllLocation {
  info: Page,
  results: LocationAnime[]
}

export interface Page {
  "count":826,
  "pages":42,
  "next": string | null,
  "prev": string | null,
}

export interface LocationAnime {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[],
  url: string,
  created: string
}

export interface ArrayLocation extends LocationAnime{
  array?: number[] | number,
  Caracter?: CaractersAnime[];
}

import { Breed } from './breed.model';

export interface Image {
  id: string;
  url: string;
  width?: number;
  height?: number;
  breeds?: Breed[];
}

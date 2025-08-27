export interface Breed {
  id: string;
  name: string;
  origin?: string;
  temperament?: string;
  description?: string;
  life_span?: string;
  weight?: { imperial?: string; metric?: string };
  
}

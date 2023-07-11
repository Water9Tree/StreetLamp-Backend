export class Lamp {
  lampId: number;
  lampName: string;
  location: {
    x: number;
    y: number;
  };
  adjoiningPlace: string;
  status?: 'light' | 'dark';
  isFavorite?: boolean;
}

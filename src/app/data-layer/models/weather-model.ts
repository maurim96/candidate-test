export interface Weather {
  name: string;
  main: {
    feelsLike: number;
    grndLevel: number;
    humidity: number;
    pressure: number;
    seaLevel: number;
    temp: number;
    tempMax: number;
    tempMin: number;
  };
}

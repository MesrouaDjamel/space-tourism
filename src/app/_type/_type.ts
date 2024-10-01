
export type TTechnology = {
    id: number;
    image: string;
    name: string;
    desc: string;
};

export type TDestination = {
    id: number;
    name: string;
    image: string ;
    desc: string;
    averageDistance: string;
    estimateTravelTime: string;
};

export type TCrew = {
  id: number;
  role: string;
  name: string;
  desc: string;
  image: string;
}
export interface IHogwartsHouse {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: IHead[];
  traits: ITrait[];
}

export interface IHead {
  id: string;
  firstName: string;
  lastName: string;
}

export interface ITrait {
  id: string;
  name: string;
}

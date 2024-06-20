export interface ICountry {
  name: IName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: ICurrencies;
  idd: IIdd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: ILanguages;
  translations: { [key: string]: ITranslation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: IDemonyms;
  flag: string;
  maps: IMaps;
  population: number;
  car: ICar;
  timezones: string[];
  continents: string[];
  flags: IFlags;
  coatOfArms: ICoatOfArms;
  startOfWeek: string;
  capitalInfo: ICapitalInfo;
  postalCode: IPostalCode;
}

export interface ICapitalInfo {
  latlng: number[];
}

export interface ICar {
  signs: string[];
  side: string;
}

export interface ICoatOfArms {}

export interface ICurrencies {
  XPF: IXpf;
}

export interface IXpf {
  name: string;
  symbol: string;
}

export interface IDemonyms {
  eng: IEng;
}

export interface IEng {
  f: string;
  m: string;
}

export interface IFlags {
  png: string;
  svg: string;
}

export interface IIdd {
  root: string;
  suffixes: string[];
}

export interface ILanguages {
  fra: string;
}

export interface IMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface IName {
  common: string;
  official: string;
  nativeName: INativeName;
}

export interface INativeName {
  fra: ITranslation;
}

export interface ITranslation {
  official: string;
  common: string;
}

export interface IPostalCode {
  format: string;
  regex: string;
}

export interface UserParam {
  gender: string;
  page: number;
  results: number;
  nat: string;
}

export interface UserResponse {
  results: User[];
  info: Info;
}

export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  gob: Gob;
  registered: Gob;
  phone: number;
  cell: number;
  id: Id;
  picture: Picture;
  nat: string;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  streer: string;
  city: string;
  state: string;
  postCode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Gob {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

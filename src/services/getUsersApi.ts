import axios from "axios";
import { err, ok } from "neverthrow";

interface IUserResponse {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: "male" | "female";
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
}

interface Address {
  address: string;
  city?: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

interface IHair {
  color: string;
  type: string;
}

interface IReposnse {
  users: IUserResponse[];
  total: number;
  skip: number;
  limit: number;
}

export type IUsersResult = IReposnse;

const getUsersApi = async () => {
  try {
    const { data } = await axios.get<IReposnse>("https://dummyjson.com/users");
    return ok(data);
  } catch {
    return err("failed to get users");
  }
};

export default getUsersApi;

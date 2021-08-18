import { Address } from "./address";

export interface Table {
  id: string,
  name: string,
  age: number,
  gender: string,
  department: string,
  address: Address
}
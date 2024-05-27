
import CustomerStatus from './models/customer-status';

// ? wir können alles, was außen in einer andere Datei/Modul verwendet werden soll mit dem Schlüsselwort export kennzeichnen
export type Address = {
  street: string;
  postalCode: string;
  city: string;
};

export type Customer = {
  number: number;
  status: CustomerStatus;
  name: string;
  address: Address;
};

export const DISCOUNT = 5.8;

export function calculatePrice(salesPrice: number): number {
  return salesPrice - (salesPrice * DISCOUNT) / 100;
}

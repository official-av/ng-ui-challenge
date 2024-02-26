export interface Tariff {
  id: number;
  name: string;
  uploadSpeed: number;
  downloadSpeed: number;
  benefits: string[];
  price: number;
}

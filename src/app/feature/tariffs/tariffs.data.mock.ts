import { Tariff } from "./Tariff.interface";

const mockTariffs: Array<Tariff> = [
  {
    id: 1,
    name: "Optic Fiber S",
    uploadSpeed: 6,
    downloadSpeed: 12,
    benefits: ["super reliable", "fiber connectivity", "low latency"],
    price: 123.45,
  },
  {
    id: 2,
    name: "Optic Fiber M",
    uploadSpeed: 12,
    downloadSpeed: 24,
    benefits: ["super reliable", "fiber connectivity", "low latency"],
    price: 250.99,
  },
  {
    id: 3,
    name: "Optic Fiber XL",
    uploadSpeed: 30,
    downloadSpeed: 150,
    benefits: ["super reliable", "fiber connectivity", "low latency"],
    price: 349.99,
  },
  {
    id: 4,
    name: "True 5G",
    uploadSpeed: 50,
    downloadSpeed: 100,
    benefits: ["super reliable", "fiber connectivity", "low latency"],
    price: 150.99,
  },
  {
    id: 5,
    name: "4G LTE",
    uploadSpeed: 10,
    downloadSpeed: 15,
    benefits: ["super reliable", "fiber connectivity", "low latency"],
    price: 35.99,
  },
];
export default mockTariffs;

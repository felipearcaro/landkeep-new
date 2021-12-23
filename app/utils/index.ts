import { json } from "remix";
import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8082/api",
});

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const badRequest = <T>(data: T) => json(data, { status: 400 });

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const toUSD = (n: number) => formatter.format(n); // 2500 => $2,500

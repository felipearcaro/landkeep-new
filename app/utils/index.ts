import { json } from "remix";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const badRequest = <T>(data: T) => json(data, { status: 400 });

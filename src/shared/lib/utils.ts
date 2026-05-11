import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const truncate = (str: string, length: number) =>
  str.length > length ? `${str.slice(0, length)}...` : str;

export const formatNumber = (n: number) =>
  new Intl.NumberFormat("en-US").format(n);
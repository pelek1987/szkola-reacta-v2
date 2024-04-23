import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const classNames = (...classes: ClassValue[]): string => {
  return twMerge(clsx(classes));
};

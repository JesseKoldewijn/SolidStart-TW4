import { clsx } from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export const cn = (...classes: ClassNameValue[]): string => {
  return clsx(twMerge(classes));
};

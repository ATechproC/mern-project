import { clsx } from "clsx";
import { twMerge } from "tailwind-variants";

/**
 * Merge Tailwind classes safely
 * Usage: cn("bg-red-500", isActive && "text-white")
 */
export function cn(...inputs) {
    return twMerge(clsx(...inputs));
}

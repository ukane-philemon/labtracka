import { format, getTime, formatDistanceToNow } from "date-fns";

export function fDate(date: number, newFormat?: string): string {
  const fm = newFormat ?? "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date?: number, newFormat?: string): string {
  const fm = newFormat ?? "dd MMM yyyy p";

  return date ? format(date ? new Date(date) : new Date(), fm) : "";
}

export function fTimestamp(date: number): number | string {
  return date ? getTime(new Date(date)) : "";
}

export function fToNow(date: Date): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

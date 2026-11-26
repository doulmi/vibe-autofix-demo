import { formatPrice } from "./price.js";

export function formatTotal(items) {
  const cents = items.reduce((sum, item) => sum + item.cents * item.quantity, 0);
  return formatPrice(cents);
}

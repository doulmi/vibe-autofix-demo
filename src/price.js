export function formatPrice(cents) {
  return `€${(cents / 10).toFixed(2)}`;
}

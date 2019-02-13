export function getFormattedPrice(price) {
  return `RM ${(price / 100)}`;
}

export function isObjectEmpty(obj) {
  return obj && Object.keys(obj).length === 0
}
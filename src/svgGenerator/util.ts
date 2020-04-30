/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculates the distance between to points.
 */
export function getDistance(x1: number, y1: number, x2: number, y2: number) {
  const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  return distance;
}

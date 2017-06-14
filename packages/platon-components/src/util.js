export function flatten(arr, seed = []) {
  if (Array.isArray(arr)) {
    arr.forEach(i => flatten(i, seed));
  } else {
    seed.push(arr);
  }
  return seed;
}

export function getName(o) {
  return typeof o === 'object' ? o.name : o;
}

export function getValue(o) {
  return typeof o === 'object' ? o.value : o;
}

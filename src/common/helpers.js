export function isoDate (isoString) {
  let date = isoString.split('T')[0]
  return date.split('-')[2]
}

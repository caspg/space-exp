export default (string, maxLength) => {
  if (string.length <= maxLength) {
    return string
  }

  const initialTrim = string.substr(0, maxLength)
  const finalIndex = Math.min(initialTrim.length, initialTrim.lastIndexOf(' '))
  const finalTrim = initialTrim.substr(0, finalIndex)

  return `${finalTrim}...`
}

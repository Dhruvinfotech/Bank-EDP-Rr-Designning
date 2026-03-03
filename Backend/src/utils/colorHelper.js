function nameToColor(name) {
  let hash = 0;
  for (let char of name) {
    hash = char.charCodeAt(0) + hash * 31;
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 60%)`;
}

module.exports = { nameToColor };
function humanReadable(seconds) {
  let secs = (seconds % 60).toString().padStart(2, '0')
  let minutes = Math.floor(Math.floor(seconds/60) % 60).toString().padStart(2, '0')
  let hours = Math.floor(Math.floor(seconds/60)/60).toString().padStart(2, '0')
  return `${hours}:${minutes}:${secs}`
}

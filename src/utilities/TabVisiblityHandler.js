let hidden
let visibilityChange

// Values taken from documentation, dependent on browser

if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden'
  visibilityChange = 'visibilitychange'
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden'
  visibilityChange = 'msvisibilitychange'
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden'
  visibilityChange = 'webkitvisibilitychange'
}

const isTabInactive = () => {
  return document[hidden]
}

export { isTabInactive, visibilityChange }

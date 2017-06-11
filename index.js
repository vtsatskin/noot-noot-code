const engToMorse = {
  a: '.-',
  b: '-...',
  c: '-.-.'
}

var short = document.querySelector('#short')
var long = document.querySelector('#long')

short.addEventListener('ended', playbackEnded, true)
long.addEventListener('ended', playbackEnded, true)

var playbackQueue = []

function playbackEnded () {
  playMorse()
}

function textToMorse (str) {
  return [].concat(...str.split('').map(x => engToMorse[x].split('')))
}

function playMorse () {
  const code = playbackQueue.shift()

  if (code === '.') {
    short.play()
  } else if (code === '-') {
    long.play()
  } else {
    console.log('Playback ended')
  }
}

playbackQueue = textToMorse('abc')
playMorse()

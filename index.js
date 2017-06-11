const SPACE_TIME = 500 // in ms

const engToMorse = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  ' ': ' '
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
  } else if (code === ' ') {
    setTimeout(SPACE_TIME, playMorse)
  } else {
    console.log('Playback ended')
  }
}

playbackQueue = textToMorse('hello world')
playMorse()

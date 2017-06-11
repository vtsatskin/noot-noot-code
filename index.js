// Morse code timings
// ... = -
// code space: '1/3 .'
// letter space: '...'
// space length: '.......'

const DOT_TIME = 384 / 1.5 // in ms
const SPACE_TIME = DOT_TIME * 7 // in ms
const LETTER_SPACE_TIME = 0

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

short.playbackRate = 1.5
long.playbackRate = 1.5

var playbackQueue = []

function playbackEnded () {
  playMorse()
}

function textToMorse (str) {
  return [].concat(...str.toLowerCase().split('').map(x => engToMorse[x].split('')))
}

function playMorse () {
  const code = playbackQueue.shift()

  if (code === '.') {
    setTimeout(() => short.play(), LETTER_SPACE_TIME)
  } else if (code === '-') {
    setTimeout(() => long.play(), LETTER_SPACE_TIME)
  } else if (code === ' ') {
    setTimeout(playMorse, SPACE_TIME)
  } else {
    console.log('Playback ended')
  }
}

playbackQueue = textToMorse('hello world')
playMorse()

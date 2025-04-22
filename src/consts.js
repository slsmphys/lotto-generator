const GAMES = [
  'Lotto',
  'EuroMillions',
  'Set For Life',
  'ThunderBall'
]

const GAME_CONFIGS = {
  'Lotto': {
    mainBallMax: 59,
    mainCount: 6,
    hasAdditional: false
  },
  'EuroMillions': {
    mainBallMax: 50,
    mainCount: 5,
    hasAdditional: true,
    additionalBallMax: 12,
    additionalCount: 2,
    additionalName: 'Lucky Stars'
  },
  'Set For Life': {
    mainBallMax: 47,
    mainCount: 5,
    hasAdditional: true,
    additionalBallMax: 10,
    additionalCount: 1,
    additionalName: 'Life Ball'
  },
  'ThunderBall': {
    mainBallMax: 39,
    mainCount: 5,
    hasAdditional: true,
    additionalBallMax: 14,
    additionalCount: 1,
    additionalName: 'ThunderBall'
  }
}

export {
  GAMES,
  GAME_CONFIGS
}

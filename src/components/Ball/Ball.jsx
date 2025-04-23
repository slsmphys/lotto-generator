import BallStyled from './BallStyled'

const BALL_COLOURS = {
  lottoWhite: '#ffffff',
  lottoBlue: '#499bea',
  lottoPink: '#ff0066',
  lottoGreen: '#66cc33',
  lottoYellow: '#ffcc00',
  lottoPurple: '#990099',
  euromillions: '#7f1734',
  luckyStar: '#ffd706',
  setForLife: '#ffffff',
  lifeBall: '#00d6da',
  thunderMain: '#a10f94',
  thunderBall: '#b612a7'
}

const DEFAULT_COLOUR = '#ffffff'

const Ball = ({
  number,
  game,
  isMainBall
}) => {
  const getBallColor = (game, number, isMainBall) => {
    let color = DEFAULT_COLOUR

    switch (game) {
      case 'EuroMillions':
        return isMainBall ? BALL_COLOURS.euromillions : BALL_COLOURS.luckyStar
      case 'Set For Life':
        return isMainBall ? BALL_COLOURS.setForLife : BALL_COLOURS.lifeBall
      case 'ThunderBall':
        return isMainBall ? BALL_COLOURS.thunderMain : BALL_COLOURS.thunderBall
      default:
        if (number <= 9) {
          color = BALL_COLOURS.lottoWhite
        } else if (number >= 10 && number <= 19) {
          color = BALL_COLOURS.lottoBlue
        } else if (number >= 20 && number <= 29) {
          color = BALL_COLOURS.lottoPink
        } else if (number >= 30 && number <= 39) {
          color = BALL_COLOURS.lottoGreen
        } else if (number >= 40 && number <= 49) {
          color = BALL_COLOURS.lottoYellow
        } else {
          color = BALL_COLOURS.lottoPurple
        }
        
      return color
    }
  } 

  return (
    <BallStyled
      color={getBallColor(game, number, isMainBall)}
      number={number}
    >
      {number}
    </BallStyled>
  )
}

export default Ball

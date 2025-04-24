import BallStyled from './BallStyled'

const BALL_COLOURS = {
  lottoWhite: '#ffffff',
  lottoBlue: '#a2c6ff',
  lottoPink: '#f079bf',
  lottoGreen: '#aeea8a',
  lottoYellow: '#ffeb21',
  lottoPurple: '#af7aba',
  euromillions: '#fd5e49',
  luckyStar: '#ffd706',
  setForLife: '#ffffff',
  lifeBall: '#01cbd9',
  thunderMain: '#8a01c1',
  thunderBall: '#b306ac'
}

const DEFAULT_COLOUR = '#ffffff'

const Ball = ({
  number,
  game,
  isMainBall
}) => {
  const label = number < 10 ? `0${number}` : number

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
      <div className="inner-panel">
        {label}
      </div>
    </BallStyled>
  )
}

export default Ball

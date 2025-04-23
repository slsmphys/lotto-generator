import Ball from '../Ball/Ball'
import BallContainerStyled from './BallContainerStyled'

const BallContainer = ({
  numbers,
  game,
  isMainBall = true
}) => {

  return (
    <BallContainerStyled>
      {numbers.map(n => (
        <Ball
          key={`${game}-${isMainBall ? 'primary' : 'secondary'}-${n}`}
          number={n}
          game={game}
          isMainBall={isMainBall}
        />
      ))}
    </BallContainerStyled>
  )
}

export default BallContainer

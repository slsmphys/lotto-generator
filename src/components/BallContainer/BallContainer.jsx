import Ball from '../Ball/Ball'
import BallContainerStyled from './BallContainerStyled'

const BallContainer = ({
  numbers,
  game,
  type
}) => {

  return (
    <BallContainerStyled>
      {numbers.map(n => (
        <Ball
          key={`${game}-${type}-${n}`}
          number={n}
          game={game}
          type={type}
        />
      ))}
    </BallContainerStyled>
  )
}

export default BallContainer

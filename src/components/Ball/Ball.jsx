import BallStyled from './BallStyled'

const Ball = ({
  number,
  game,
  type
}) => {

  return (
    <BallStyled
      varient={game}
      type={type}
      number={number}
    >
      {number}
    </BallStyled>
  )
}

export default Ball

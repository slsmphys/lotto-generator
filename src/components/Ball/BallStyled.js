import styled from 'styled-components'

const BALL_COLOURS = {
  'Lotto': {
    main: {
      default: '#ffffff',
      tens: '',
      twenties: '',
      thirties: '',
      forties: '',
      fifties: ''
    }
  },
  'EuroMillions': {
    main: {
      default: ''
    },
    luckyStars: {
      default: ''
    }
  },
  'Set For Life': {
    main: {
      default: ''
    },
    lifeBall: {
      default: ''
    }
  },
  'ThunderBall': {
    main: {
      default: ''
    },
    thunderBall : {
      default: ''
    }
  }
}

const BallStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: yellow;

`

export default BallStyled

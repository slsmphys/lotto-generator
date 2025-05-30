import styled from 'styled-components'

const WHITE = '#ffffff'

const BallStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${props => props.color === WHITE ? '#232323' : props.color};
  background-color: ${props => props.color};

  .inner-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    font-family: 'Figtree';
    font-weight: 600;
    font-size: 20px;
  }
`

export default BallStyled

import styled from 'styled-components'

const BallContainerStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;

  li {
    margin-right: 8px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

export default BallContainerStyled

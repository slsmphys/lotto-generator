const generateGameBalls = (max) => {
  const balls = []

  for (let i = 1; i <= max; i++) {
    balls.push(i)
  }

  return balls
}

export {
  generateGameBalls,
}
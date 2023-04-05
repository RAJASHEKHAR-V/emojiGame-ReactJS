import './index.css'

const WinOrLoseCard = props => {
  const {score, jumbledList, onPlayAgainButton} = props
  const isWin =
    score === jumbledList.length
      ? [
          'You Won',
          'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
          'Best Score',
        ]
      : [
          'You Lose',
          'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
          'Score',
        ]
  //   const onClickPlay = () => {
  //     onPlayAgainButton()
  //   }

  return (
    <>
      <div className="win-details-card">
        <h1 className="win-loose-heading">{isWin[0]}</h1>
        <div className="best-score-card">
          <p className="best-score-el">{isWin[2]}</p>
          <p className="score-el">
            {score}/{jumbledList.length}
          </p>
        </div>
        <div>
          <button className="button" type="submit" onClick={onPlayAgainButton}>
            Play Again
          </button>
        </div>
      </div>
      <img src={isWin[1]} className="won-lose-image" alt="win or lose" />
    </>
  )
}

export default WinOrLoseCard

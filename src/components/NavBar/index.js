import './index.css'

const NavBar = props => {
  const {score, totalScore} = props

  return (
    <div className="score-card">
      <p className="score-emoji">Score: {score}</p>
      <p className="top-score">Top Score: {totalScore}</p>
    </div>
  )
}

export default NavBar

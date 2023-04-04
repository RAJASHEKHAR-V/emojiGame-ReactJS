/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, totalScore: 0, isEmojiMatched: true, idsList: []}

  onClickOfEmoji = emojiId => {
    const {idsList, score, isEmojiMatched} = this.state
    const {emojisList} = this.props
    const isGameScore = score + 1 === emojisList.length ? !isEmojiMatched : true
    const isIdMatched = idsList.includes(emojiId)
    console.log(isIdMatched)

    if (isIdMatched) {
      this.setState(prevState => ({
        isEmojiMatched: !prevState.isEmojiMatched,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        idsList: [...prevState.idsList, emojiId],
        isEmojiMatched: isGameScore,
      }))
    }
  }

  onPlayAgainButton = () => {
    const {score, totalScore} = this.state
    const addGreaterScore = score > totalScore ? score : totalScore
    const {emojisList} = this.props

    if (score === emojisList.length) {
      this.setState(prevState => ({
        score: 0,
        totalScore: 0,
        isEmojiMatched: !prevState.isEmojiMatched,
        idsList: [],
      }))
    } else {
      this.setState(prevState => ({
        score: 0,
        totalScore: addGreaterScore,
        isEmojiMatched: !prevState.isEmojiMatched,
        idsList: [],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, totalScore, isEmojiMatched} = this.state
    const jumbledList = this.shuffledEmojisList()
    // console.log(isEmojiMatched)

    return (
      <div className="bg-container">
        <div className="emoji-card">
          <div className="logo-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              className="emoji-logo"
              alt="emoji logo"
            />
            <p className="emoji-game-el">Emoji Game</p>
          </div>
          {isEmojiMatched ? (
            <NavBar key="nav-bar" score={score} totalScore={totalScore} />
          ) : (
            ''
          )}
        </div>
        {isEmojiMatched ? (
          <div className="Emoji-body">
            {jumbledList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiObject={eachEmoji}
                onClickOfEmoji={this.onClickOfEmoji}
              />
            ))}
          </div>
        ) : (
          ''
        )}
        {!isEmojiMatched ? (
          <div className="win-lose-card">
            <WinOrLoseCard
              key="win-lose"
              score={score}
              jumbledList={jumbledList}
              onPlayAgainButton={this.onPlayAgainButton}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default EmojiGame

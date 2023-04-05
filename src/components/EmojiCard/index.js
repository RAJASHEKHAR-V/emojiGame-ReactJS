import './index.css'

const EmojiCard = props => {
  const {emojiObject, onClickOfEmoji} = props
  const {id, emojiName, emojiUrl} = emojiObject
  const onEmoji = () => {
    onClickOfEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="image-button" type="submit" onClick={onEmoji}>
        <img src={emojiUrl} className="Emoji" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

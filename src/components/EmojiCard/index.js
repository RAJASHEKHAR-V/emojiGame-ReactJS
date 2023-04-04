import './index.css'

const EmojiCard = props => {
  const {emojiObject, onClickOfEmoji} = props
  const {id, emojiName, emojiUrl} = emojiObject
  const onEmoji = () => {
    onClickOfEmoji(id)
  }

  return (
    <div className="emoji-item">
      <img src={emojiUrl} className="Emoji" alt={emojiName} onClick={onEmoji} />
    </div>
  )
}

export default EmojiCard

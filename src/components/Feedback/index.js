// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }
  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <buton
                  type="button"
                  className="btn"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-img"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </buton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="main-container">
        <div className="app-container">
          <img src={loveEmojiUrl} alt="love emoji" className="emoji-love" />
          <h1 className="thank-you-text">Thank You!</h1>
          <p className="text">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }
  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback

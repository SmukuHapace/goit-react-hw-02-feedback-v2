import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = name => {
    this.setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (good / (good + neutral + bad) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={() => this.handleChange('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.handleChange('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.handleChange('bad')}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul className={css.statisticList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </section>
    );
  }
}

export default Feedback;

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

  handleTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

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
          <li>Total: {this.handleTotal()}</li>
        </ul>
      </section>
    );
  }
}

export default Feedback;

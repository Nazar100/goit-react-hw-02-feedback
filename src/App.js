import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
    // console.log(this.state[option].value);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    let average = Math.round((good / (good + neutral + bad)) * 100);
    return average;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={this.state}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            average={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;

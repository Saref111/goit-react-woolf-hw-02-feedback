import { Component } from 'react';
import { countPercentage } from '../helpers/helpers';

import FeedbackOptions from './FeedbackWidget/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

import css from './App.module.scss';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  incrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  incrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  getPositivePercentage = () => {
    return this.state.good
      ? countPercentage(
          this.state.neutral + this.state.bad + this.state.good,
          this.state.good
        ).toFixed(2)
      : 0;
  };

  render() {
    return (
      <div className={css.app}>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            incrementBad={this.incrementBad}
            incrementGood={this.incrementGood}
            incrementNeutral={this.incrementNeutral}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            positivePercentage={this.getPositivePercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;

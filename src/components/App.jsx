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

  incrementOption = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
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
            options={this.state}
            onLeaveFeedback={this.incrementOption}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            options={this.state}
            positivePercentage={this.getPositivePercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;

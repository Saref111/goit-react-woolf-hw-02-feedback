import { Component } from 'react';
import { countPercentage } from '../helpers/helpers';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

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

  countTotalFeedback = () => {
    return this.state.neutral + this.state.bad + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? countPercentage(this.countTotalFeedback(), this.state.good).toFixed(2)
      : 0;
  };

  render() {
    const totalCount = this.countTotalFeedback();
    return (
      <div className={css.app}>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.incrementOption}
          />
        </Section>
        <Section title="Statistics">
          {totalCount ? (
            <Statistics
              options={this.state}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" className={css.label} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

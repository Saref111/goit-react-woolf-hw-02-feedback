import { Component } from 'react';
import { countPercentage } from '../helpers/helpers';

import FeedbackOptions from './FeedbackWidget/FeedbackWidget';
import Statistics from './Statistics/Statistics';
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
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          incrementBad={this.incrementBad}
          incrementGood={this.incrementGood}
          incrementNeutral={this.incrementNeutral}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          positivePercentage={countPercentage(this.state.good, this.state.neutral + this.state.bad + this.state.good)}
        />
      </div>
    );
  }
}

export default App;

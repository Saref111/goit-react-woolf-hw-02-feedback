import React, { Component } from 'react';
import { makeFirstLetterUppercase } from '../../helpers/helpers';

import Notification from './Notification/Notification';

import css from './Statistics.module.scss';

class Statistics extends Component {
  isEmpty = () => {
    const { good, neutral, bad } = this.props.options;
    return good === 0 && neutral === 0 && bad === 0;
  };

  render() {
    const { options, positivePercentage } = this.props;

    return this.isEmpty() ? (
      <Notification message="No feedback given" className={css.label} />
    ) : (
      <ul className={css.list}>
        {Object.entries(options).map(([key, value]) => (
          <li key={key}>
              <label key={key} className={css.label}>
                {makeFirstLetterUppercase(key)}: {value}
              </label>
          </li>
        ))}
        <li>
          <label className={css.label}>
            Positive feedback {positivePercentage} %
          </label>
        </li>
      </ul>
    );
  }
}

export default Statistics;

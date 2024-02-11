import React from 'react';
import { makeFirstLetterUppercase } from '../../helpers/helpers';

import css from './Statistics.module.scss';

const Statistics = ({ options, positivePercentage }) => {
  return (
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
};

export default Statistics;

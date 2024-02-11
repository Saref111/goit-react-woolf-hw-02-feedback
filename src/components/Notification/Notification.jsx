import React from 'react';

import css from './Notification.module.scss';

const Notification = ({ message }) => {
  return <p className={css.label}>{message}</p>;
};

export default Notification;

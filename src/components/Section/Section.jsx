import React from 'react';

import css from './Section.module.scss';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      <div className={css.wrapper}>{children}</div>
    </section>
  );
};

export default Section;

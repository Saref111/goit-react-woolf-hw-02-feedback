import React, { Component } from 'react';

import css from './Section.module.scss';

class Section extends Component {
  render() {
    return (
      <section className={css.section}>
        {this.props.title && <h2 className={css.title}>{this.props.title}</h2>}
        <div className={css.wrapper}>{this.props.children}</div>
      </section>
    );
  }
}

export default Section;

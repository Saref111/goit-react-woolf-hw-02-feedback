import React, {Component} from "react";

import css from "./Statistics.module.scss";

class Statistics extends Component {
    render() {
        const {
            good, 
            neutral, 
            bad,
            positivePercentage,
        } = this.props;
        return (
            <div>
                <p className={css.title}>Statistics</p>
                <label className={css.label}>Good: {good}</label>
                <label className={css.label}>Neutral: {neutral}</label>
                <label className={css.label}>Bad: {bad}</label>
                <label className={css.label}>Positive feedback {positivePercentage} %</label>
            </div>
        );
    }
}

export default Statistics;

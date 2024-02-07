import React, {Component} from "react";

import css from "./Statistics.module.scss";

class Statistics extends Component {
    isEmpty = () => {
        const {good, neutral, bad} = this.props;
        return good === 0 && neutral === 0 && bad === 0;
    }

    render() {
        const {
            good, 
            neutral, 
            bad,
            positivePercentage,
        } = this.props;
        return this.isEmpty() ? (
            <label className={css.label}>No feedback given</label>
        ) : (
            <>
                <label className={css.label}>Good: {good}</label>
                <label className={css.label}>Neutral: {neutral}</label>
                <label className={css.label}>Bad: {bad}</label>
                <label className={css.label}>Positive feedback {positivePercentage} %</label>
            </>
        );
    }
}

export default Statistics;

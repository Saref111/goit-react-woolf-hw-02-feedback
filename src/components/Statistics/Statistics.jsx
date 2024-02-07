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

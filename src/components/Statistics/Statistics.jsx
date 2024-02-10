import React, {Component} from "react";
import {makeFirstLetterUppercase} from "../../helpers/helpers";

import css from "./Statistics.module.scss";

class Statistics extends Component {
    isEmpty = () => {
        const {good, neutral, bad} = this.props;
        return good === 0 && neutral === 0 && bad === 0;
    }

    render() {
        const {
            options,
            positivePercentage,
        } = this.props;
        
        return this.isEmpty() ? (
            <label className={css.label}>No feedback given</label>
        ) : (
            <>
                {Object.entries(options).map(([key, value]) => (
                    <label key={key} className={css.label}>
                        {makeFirstLetterUppercase(key)}: {value}
                    </label>
                ))}
                <label className={css.label}>Positive feedback {positivePercentage} %</label>
            </>
        );
    }
}

export default Statistics;

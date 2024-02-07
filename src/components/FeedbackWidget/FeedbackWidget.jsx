import React, {Component} from "react";


import css from "./FeedbackWidget.module.scss";
class FeedbackWidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    incrementGood = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }));
    };

    incrementNeutral = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }));
    }

    incrementBad = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }));
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        return this.countTotalFeedback() === 0
            ? 0
            : Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }

    render() {
        const positiveFeedbackCount = this.countPositiveFeedbackPercentage();
        return (
            <div>
                <p className={css.title}>Feedback Widget</p>
                <div className={css.buttonsWrapper}>
                    <button className={css.button} onClick={this.incrementGood}>Good</button>
                    <button className={css.button} onClick={this.incrementNeutral}>Neutral</button>
                    <button className={css.button} onClick={this.incrementBad}>Bad</button>
                </div>
                <p className={css.title}>Statistics</p>
                <label className={css.label}>Good: {this.state.good}</label>
                <label className={css.label}>Neutral: {this.state.neutral}</label>
                <label className={css.label}>Bad: {this.state.bad}</label>
                <label className={css.label}>Positive feedback {positiveFeedbackCount} %</label>
            </div>
        );
    }
}


export default FeedbackWidget;

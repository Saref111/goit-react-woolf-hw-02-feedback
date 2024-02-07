import React, {Component} from "react";


import css from "./FeedbackWidget.module.scss";
class FeedbackOptions extends Component {
    render() {
        return (
            <div>
                <p className={css.title}>Feedback Widget</p>
                <div className={css.buttonsWrapper}>
                    <button className={css.button} onClick={this.props.incrementGood}>Good</button>
                    <button className={css.button} onClick={this.props.incrementNeutral}>Neutral</button>
                    <button className={css.button} onClick={this.props.incrementBad}>Bad</button>
                </div>
            </div>
        );
    }
}


export default FeedbackOptions;

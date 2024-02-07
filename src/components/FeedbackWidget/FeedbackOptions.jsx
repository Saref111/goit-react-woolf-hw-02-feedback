import React, {Component} from "react";

import css from "./FeedbackOptions.module.scss";

class FeedbackOptions extends Component {
    render() {
        return (
            <>
                <button className={css.button} onClick={this.props.incrementGood}>Good</button>
                <button className={css.button} onClick={this.props.incrementNeutral}>Neutral</button>
                <button className={css.button} onClick={this.props.incrementBad}>Bad</button>
            </>
        );
    }
}

export default FeedbackOptions;

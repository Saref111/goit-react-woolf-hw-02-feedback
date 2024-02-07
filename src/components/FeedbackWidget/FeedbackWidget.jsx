import React, {Component} from "react";

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

    render() {
        return (
            <div>
                <h1>Feedback Widget</h1>
                <button onClick={this.incrementGood}>Good</button>
                <button onClick={this.incrementNeutral}>Neutral</button>
                <button onClick={this.incrementBad}>Bad</button>
                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
            </div>
        );
    }
}


export default FeedbackWidget;

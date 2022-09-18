import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from "../styled/Section";
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notify';

export class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalCount() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPercentage(propertyName) {
    const total = this.totalCount();
    const value = this.state[propertyName];
    const percentage = (value / total) * 100;
    return Number(percentage.toFixed())
  }

  handleIncrement = vote => {
    this.setState(prevState => {
      const value = prevState[vote];
      return {
        [vote]: value + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalCount();
    const percentage = this.countPercentage("good");
    return (
      <Container>
        <h1>Please leave feedback</h1>
        <FeedbackOptions handleIncrement={this.handleIncrement} />
        {total
        ? <Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={percentage} />
        : <Notification />}
      </Container>
    );
  }
}

Section.propTypes = {
  div: PropTypes.string,
  h2: PropTypes.string,
  button: PropTypes.string,
  li: PropTypes.string,
};

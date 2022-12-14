import React, { Component } from 'react';
import { Box } from './App.styled';
import { GlobalStyle } from 'components/Common/GlobalStyle';
import { Statistics, Notification } from 'components/Statistics/';
import { FeedbackOptions } from 'components/FeedbackOptions/';
import { Section } from 'components/Common';

class App extends Component {
  state = {
    GOOD: 0,
    NEUTRAL: 0,
    BAD: 0,
  };

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((acc, item) => {
      return acc + item;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let percent = ((this.state.GOOD * 100) / this.countTotalFeedback()).toFixed(
      0
    );
    return percent;
  };

  feedbackHandler = data => {
    this.setState(prevState => {
      return {
        [data]: prevState[data] + 1,
      };
    });
  };

  render() {
    const totalFeedBack = this.countTotalFeedback();
    const positivePrecent = this.countPositiveFeedbackPercentage();
    return (
      <Box alignItems="center" flexDirection="column">
        <Section title="Please leave feedback">
          <FeedbackOptions state={this.state} btnDown={this.feedbackHandler} />
        </Section>
        <Section title="Statistics" display="flex" alignContent="flex-start">
          {totalFeedBack ? (
            <Statistics
              list={this.state}
              total={totalFeedBack}
              count={positivePrecent}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>

        <GlobalStyle />
      </Box>
    );
  }
}

export default App;

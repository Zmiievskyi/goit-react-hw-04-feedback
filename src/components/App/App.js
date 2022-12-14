import { useState } from 'react';
import { Box } from './App.styled';
import { GlobalStyle } from 'components/Common/GlobalStyle';
import { Statistics, Notification } from 'components/Statistics/';
import { FeedbackOptions } from 'components/FeedbackOptions/';
import { Section } from 'components/Common';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  let percent = ((good * 100) / total).toFixed(0);

  const handlerFeedback = data => {
    if (data === 'GOOD') {
      setGood(good + 1);
    }
    if (data === 'NEUTRAL') {
      setNeutral(neutral + 1);
    }
    if (data === 'BAD') {
      setBad(bad + 1);
    }
  };

  return (
    <Box alignItems="center" flexDirection="column">
      <Section title="Please leave feedback">
        <FeedbackOptions
          state={['good', 'neutral', 'bad']}
          btnDown={handlerFeedback}
        />
      </Section>
      <Section title="Statistics" display="flex" alignContent="flex-start">
        {total ? (
          <Statistics
            list={['good', 'neutral', 'bad']}
            total={total}
            count={percent}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>

      <GlobalStyle />
    </Box>
  );
}

export default App;

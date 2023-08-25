import React, { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedbackOption = option => {
    setFeedback(prevFeedback => ({ ...prevFeedback, [option]: prevFeedback[option] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good * 100) / total);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedbackOption}
        />
      </Section>
      {!countTotalFeedback() ? (
        <Notification message='There is no feedback'/>) : 
        (
          <Section title='Statistics'>
            <Statistics 
              {...feedback}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
    </div>
  );
}

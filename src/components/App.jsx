import React, { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

function App() {
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

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className="app-container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedbackOption}
        />
      </Section>
      {!totalFeedback ? (
        <Notification message='There is no feedback'/>) : 
        (
          <Section title='Statistics'>
            <Statistics 
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
    </div>
  );
}

export default App;

import { Value } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  percentage,
}) => {
  const total = totalFeedback();
  const precentagePositiveFeedback = percentage();
  return (
    <>
      <Value>Good:{good} </Value>
      <Value>Neutral: {neutral}</Value>
      <Value>Bad: {bad}</Value>
      <Value>Total: {total}</Value>
      {precentagePositiveFeedback ? (
        <Value>Percentage: {precentagePositiveFeedback}%</Value>
      ) : null}
    </>
  );
};

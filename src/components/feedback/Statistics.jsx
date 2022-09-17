export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul>
      <li>
        <h2>Statistics</h2>
      </li>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive Feedback: {percentage}%</li>
    </ul>
  );
};

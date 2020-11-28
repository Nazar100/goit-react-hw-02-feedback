export default function Statisics({ good, neutral, bad, total, average }) {
  return (
    <div>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total: {total()}</li>
        {total() > 0 && <li>Average:{average()}%</li>}
      </ul>
    </div>
  );
}

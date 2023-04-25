import PropTypes from 'prop-types';
import { StatEvent } from './Statistic.styled';

 const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  }) => {
  return (
    <StatEvent>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>PositivePercentage: {positivePercentage}%</li>
    </StatEvent>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

import PropTypes from 'prop-types';
import { BtnContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnContainer>
      {options.map(option => (
        <Button
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </Button>
      ))}
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

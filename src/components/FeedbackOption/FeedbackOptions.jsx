import { Box, Button } from './feedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ handleIncrement }) => {
  return (
    <Box>
      <Button type="button" onClick={() => handleIncrement('good')}>
        Good
      </Button>
      <Button type="button" onClick={() => handleIncrement('neutral')}>
        Neutral
      </Button>
      <Button type="button" onClick={() => handleIncrement('bad')}>
        Bad
      </Button>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  Button: PropTypes.string,
};

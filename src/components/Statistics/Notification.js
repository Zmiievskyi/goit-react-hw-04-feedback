import PropTypes from 'prop-types';
import { Box } from '../App/App.styled';

export default function Notification({message}) {
  return (
    <Box flexDirection="column" alignContent="space-around" flexWrap="wrap">
      <li>{message}</li>
    </Box>
  );
}

Notification.propType = {
  message: PropTypes.string.isRequired,
};

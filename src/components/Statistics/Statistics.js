import PropTypes from 'prop-types';
import { Box } from '../App/App.styled';

export default function Statistics({ list, total, count }) {
  const id = Object.keys(list);
  return (
    <Box flexDirection="column" alignContent="space-around" flexWrap="wrap">
      {id.map(item => {
        return (
          <li key={item}>
            {item}: {list[item]}
          </li>
        );
      })}
      <li>Total: {total} </li>
      <li>Positive percentage: {count}</li>
    </Box>
  );
}

Statistics.propType = {
  list: PropTypes.shape.isRequired,
  total: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};
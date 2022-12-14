import PropTypes from 'prop-types';
import { Box } from '../App/App.styled';
import { Btn } from './FeedbackOptions.styled';

export default function FeedbackOptions ({state, btnDown}) {

  const handelMousedown = e => {
    e.preventDefault();
    btnDown(e.target.innerText);
  };

    return (
      <Box>
        {state.map(item => {
          return (
            <li key={item}>
              <Btn 
                type="button" 
                onMouseDown={handelMousedown}
                >
              {item}
              </Btn>
            </li>
          );
        })}
      </Box>
    );
  }


FeedbackOptions.propType = {
  state: PropTypes.arrayOf(PropTypes.string).isRequired,
};

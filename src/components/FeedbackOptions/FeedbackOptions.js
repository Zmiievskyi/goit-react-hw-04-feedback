import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../App/App.styled';
import { Btn } from './FeedbackOptions.styled';

export default class FeedbackOptions extends React.Component {
  handelMousedown = e => {
    e.preventDefault();
    this.props.btnDown(e.target.innerText);
  };

  render() {
    const names = Object.keys(this.props.state);
    return (
      <Box>
        {names.map(item => {
          return (
            <li key={item}>
              <Btn 
                type="button" 
                onMouseDown={this.handelMousedown}
                >
              {item}
              </Btn>
            </li>
          );
        })}
      </Box>
    );
  }
}

FeedbackOptions.propType = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({callOperator, numbers, operators, setOperator, updateDisplay}) => {
    return ( <div className="keypad-container"></div> );
}

Keypad.propTypes = {
    callOperator: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired
}
export default Keypad;
import React, { PropTypes } from 'react';

const Row = (props) => {
  const { children, x, y } = props;

  const defaultProps = { ...props };
  delete defaultProps.children;
  delete defaultProps.x;
  delete defaultProps.y;

  const flexStyle = {
    justifyContent: (x === 'center' && 'center') || (x === 'right' && 'flex-end') || (x === 'left' && 'flex-start') || '',
    alignItems: (y === 'center' && 'center') || (y === 'right' && 'flex-end') || (y === 'left' && 'flex-start') || '',
  };
  const defaultStyle = defaultProps.style || {};

  return (<div
    className="plus-antd-container"
    {...defaultProps}
    style={{
      ...defaultStyle,
      ...flexStyle,
    }}
  >
    { children }
  </div>);
};

Row.propTypes = {
  children: PropTypes.any,
  x: PropTypes.any,
  y: PropTypes.any,
};

export default Row;

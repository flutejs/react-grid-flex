import React, { PropTypes } from 'react';

const Col = (props) => {
  const { children, width, x, y } = props;

  const defaultProps = { ...props };
  delete defaultProps.children;
  delete defaultProps.width;

  const flexStyle = {
    width: (width === undefined || width === 'self') ? 'auto' : width,
    flex: width === 'auto' ? '1' : 'none',
    justifyContent: (x === 'center' && 'center') || (x === 'right' && 'flex-end') || (x === 'left' && 'flex-start') || '',
    alignItems: (y === 'center' && 'center') || (y === 'right' && 'flex-end') || (y === 'left' && 'flex-start') || '',
  };
  const defaultStyle = defaultProps.style || {};

  return (<div
    className="plus-antd-container-item"
    {...defaultProps}
    style={{
      ...defaultStyle,
      ...flexStyle,
    }}
  >
    { children }
  </div>);
};

Col.propTypes = {
  children: PropTypes.any,
  x: PropTypes.any,
  y: PropTypes.any,
  width: PropTypes.any,
};

export default Col;

import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

const CCol = (props) => {
  const { mode, children, span, left, right, width } = props;

  const defaultProps = { ...props };
  delete defaultProps.children;
  delete defaultProps.width;

  // 默认类型
  /* eslint react/jsx-wrap-multilines:0 */
  let render = <span>
    { children }
  </span>;

  const flexStyle = {
    width: (width === undefined || width === 'self') ? 'auto' : width,
    flex: width === 'auto' || width === undefined ? '1' : 'none',
  };
  const defaultStyle = defaultProps.style || {};

  // 栅格类型
  const type = {
    grid: <Col {...defaultProps}>
      { children }
    </Col>,
    float: <div
      className={(left || right) ? `antd-container-float-${(left && 'left') || (right && 'right')}` : 'antd-container-float-left'}
    >
      { children }
    </div>,
    flex: <div
      {...defaultProps}
      style={{
        ...defaultStyle,
        ...flexStyle,
      }}
    >
      { children }
    </div>,
  };

  // 类型判断
  if (mode) {
    render = type[mode];
  }

  return render;
};

CCol.propTypes = {
  children: PropTypes.any,
  mode: PropTypes.any,
  span: PropTypes.any,
};

export default CCol;

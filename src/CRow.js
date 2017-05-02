import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

const CRow = (props) => {
  const { mode, children, x, y } = props;

  const defaultProps = { ...props };
  delete defaultProps.children;

  // 默认类型
  /* eslint react/jsx-wrap-multilines:0 */
  let render = <div className="antd-container-normal">
    { children }
  </div>;

  // 传递 props 到自组件
  const c = mode ?
    React.Children.map(children, child => React.cloneElement(child, {
      mode,
    })) : children;

  const flexStyle = {
    justifyContent: (x === 'center' && 'center') || (x === 'right' && 'flex-end') || 'flex-start',
    alignItems: (y === 'center' && 'center') || (y === 'right' && 'flex-end') || 'flex-start',
  };
  const defaultStyle = defaultProps.style || {};

  // 栅格类型
  const type = {
    grid: <div className="antd-container-grid">
      <Row {...defaultProps}>
        { c }
      </Row>
    </div>,
    float: <div className="antd-container-float" {...defaultProps}>
      { c }
    </div>,
    flex: <div
      className="antd-container-flex"
      {...defaultProps}
      style={{
        ...defaultStyle,
        ...flexStyle,
      }}
    >
      { c }
    </div>,
  };

  // 类型选择
  if (mode) {
    render = type[mode];
  }

  return render;
};

CRow.propTypes = {
  children: PropTypes.any,
  mode: PropTypes.any,
  x: PropTypes.any,
  y: PropTypes.any,
};

export default CRow;

import React from 'react';
import ReactDom from 'react-dom';

import './index.less';

import { Row, Col } from '../src';

const App = ()=> <div>
  <div>
    <h1>Empty</h1>
    <Row>
      <Col width="auto"/>
      <Col width={100}/>
    </Row>
  </div>
  <div>
    <h1>Normal Row</h1>
    <Row>
      <Col />
      <Col />
    </Row>
  </div>
  <div>
    <h1>Fixed width</h1>
    <Row>
      <Col width="auto"/>
      <Col width={100}/>
    </Row>
  </div>
  <div>
    <h1>Grid</h1>
    <Row>
      <Col width="33.33333%"/>
      <Col width="33.33333%"/>
      <Col width="33.33333%"/>
    </Row>
  </div>
  <div>
    <h1>Align</h1>
    <Row>
      <Col width="auto"/>
      <Col width={100} x="right" y="center"/>
    </Row>
  </div>
  <div>
    <h1>Middle</h1>
    <Row x="center" y="center"/>
  </div>
</div>;

/* eslint no-undef:0 */
ReactDom.render(<App />, document.getElementById('root'));

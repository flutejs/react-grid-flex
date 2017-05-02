import React from 'react';
import ReactDom from 'react-dom';
import { Icon } from 'antd';

import { CRow, CCol } from '../src';
import './index.less';

const App = () => <div className="demo-w">
  <div className="demo-c">
    <h1>Normal Row</h1>
    <CRow>
      hello
    </CRow>
  </div>

  <div className="demo-c">
    <h1>Normal Col</h1>
    <CRow>
      <CCol>
        <Icon type="smile-o" />
      </CCol>
      <CCol>
        <Icon type="smile-o" />
      </CCol>
      <CCol>
        <Icon type="smile-o" />
      </CCol>
      <CCol>
        <Icon type="smile-o" />
      </CCol>
    </CRow>
  </div>

  <div className="demo-c">
    <h1>Grid</h1>
    <CRow mode="grid" gutter={16}>
      <CCol span={6}>
        <div>
          <Icon type="smile-o" />
        </div>
      </CCol>
      <CCol span={6}>
        <div>
          <Icon type="smile-o" />
        </div>
      </CCol>
      <CCol span={6}>
        <div>
          <Icon type="smile-o"/>
        </div>
      </CCol>
      <CCol span={6}>
        <div>
          <Icon type="smile-o" />
        </div>
      </CCol>
    </CRow>
  </div>

  <div className="demo-c">
    <h1>Float</h1>
    <CRow mode="float">
      <CCol left>
        <Icon type="smile-o" />
      </CCol>
      <CCol right>
        <Icon type="smile-o" />
      </CCol>
      <CCol left>
        <Icon type="smile-o" />
      </CCol>
      <CCol right>
        <Icon type="smile-o" />
      </CCol>
    </CRow>
  </div>

  <div className="demo-c">
    <h1>Flex</h1>
    <CRow mode="flex">
      <CCol width="auto">
        <Icon type="smile-o" />
      </CCol>
      <CCol width={200}>
        <Icon type="smile-o" />
      </CCol>
      <CCol width="self">
        <Icon type="smile-o" />
      </CCol>
      <CCol width="auto">
        <Icon type="smile-o" />
      </CCol>
    </CRow>
  </div>

  <div className="demo-c demo-c-middle">
    <h1>Middle</h1>
    <CRow mode="flex" x="center" y="center" style={{height:200}}>
      <Icon type="smile-o" />
    </CRow>
  </div>

</div>;

/* eslint no-undef:0 */
ReactDom.render(<App />, document.getElementById('root'));

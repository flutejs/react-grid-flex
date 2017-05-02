# antd-container

[![NPM version][npm-version]][npm-url]
[![NPM downloads][npm-download]][npm-url]
[![Node version][node-version]][npm-url]

[npm-version]: https://img.shields.io/npm/v/antd-container.svg?style=flat
[npm-download]: http://img.shields.io/npm/dm/antd-container.svg?style=flat
[npm-url]: https://npmjs.org/package/antd-container

Smart Layout Component

## How to use

```javascript
import { CRow, CCol } from 'antd-container';

// Normal Row
<CRow>
    hello
</CRow>

// Normal Col
<CRow>
  <CCol> 1 </CCol>
  <CCol> 2 </CCol>
  <CCol> 3 </CCol>
  <CCol> 4 </CCol>
</CRow>

// Grid
<CRow mode="grid" gutter={16}>
  <CCol span={6}> 1 </CCol>
  <CCol span={6}> 2 </CCol>
  <CCol span={4}> 3 </CCol>
  <CCol span={8}> 4 </CCol> 
</CRow>

// Float
<CRow mode="float">
  <CCol left> 1 </CCol>
  <CCol right> 2 </CCol>
  <CCol left> 3 </CCol>
  <CCol right> 4 </CCol>
</CRow>

// Flex
<CRow mode="flex">
  <CCol width="auto"> 1 </CCol>
  <CCol width={200}> 2 </CCol>
  <CCol width="self"> 3 </CCol>
  <CCol width="auto"> 4 </CCol>
</CRow>

// Middle
<CRow mode="flex" x="center" y="center" style={{height:200}}>
    1
</CRow>
```


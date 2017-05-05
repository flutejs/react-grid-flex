# react-grid-flex

[![NPM version][npm-version]][npm-url]
[![NPM downloads][npm-download]][npm-url]

[npm-version]: https://img.shields.io/npm/v/react-grid-flex.svg?style=flat
[npm-download]: http://img.shields.io/npm/dm/react-grid-flex.svg?style=flat
[npm-url]: https://npmjs.org/package/react-grid-flex

Easy way to use flex in react.

## How to use

```javascript
import { Row, Col } from 'react-grid-flex';

<div>
  <h1>Empty</h1>
  <Row>
    <Col width="auto" />
    <Col width={100} />
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
    <Col width="auto" />
    <Col width={100} />
  </Row>
</div>

<div>
  <h1>Grid</h1>
  <Row>
    <Col width="33.33333%" />
    <Col width="33.33333%" />
    <Col width="33.33333%" />
  </Row>
</div>

<div>
  <h1>Align</h1>
  <Row>
    <Col width="auto" />
    <Col width={100} x="right" y="center" />
  </Row>
</div>

<div>
  <h1>Middle</h1>
  <Row x="center" y="center" />
</div>
```


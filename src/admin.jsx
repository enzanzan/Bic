import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer';
import './style/common.less';

function Admin() {
  return (
    <Row>
      <Col span="3">
        <NavLeft />
      </Col>
      <Col span="21">
        <Header />
        <Row>
          Content
        </Row>
        <Footer />
      </Col>
    </Row>

  );
}

export default Admin;
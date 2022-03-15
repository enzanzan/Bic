import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer';
import './style/common.less';

function Admin() {
  return (
    <Row className="container">
      <Col span={4} className="nav-left">
        <NavLeft />
      </Col>
      <Col span={20} className="main">
        <Header />
        <Row className="content">
          Content
        </Row>
        <Footer />
      </Col>
    </Row>

  );
}

export default Admin;
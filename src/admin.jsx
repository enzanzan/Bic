import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer';
import Home from './pages/home';
import './style/common.less';

const Admin = (props) => {
  return (
    <Row className="container">
      <Col span={4} className="nav-left">
        <NavLeft />
      </Col>
      <Col span={20} className="main">
        <Header />
        <Row className="content">
          {props.children}
        </Row>
        <Footer />
      </Col>
    </Row>
  );
}

export default Admin;
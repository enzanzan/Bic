import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import Utils from '../../utils/utils';
import './index.less';

const Header = () => {

  const [useName, setUseName] = useState('');
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState('');

  // 用户名、时间
  useEffect(() => {
    setUseName('符恩铭');
    let systime = Utils.formteDate(new Date().getTime());
    setTime(systime)
    setInterval(() => {
      setTime(systime)
    }, 1000)
    getWeatherAPIData();
  }, [])

  // 天气
  const getWeatherAPIData = () => {
    axios.get('https://devapi.qweather.com/v7/weather/now?location=101010100&key=9a5fb1ac50484e8e8e2854a110ff3fb3')
      .then(res => {
        if (res) {
          let wea = res.data.now.text;
          setWeather(wea)
        }
      })
  }
  return (
    <div className='header'>
      <Row className='header-top'>
        <Col span="24">
          <span>欢迎，{useName}</span>
          <a href='#'>退出</a>
        </Col>
      </Row>
      <Row className="breadcrumb">
        <Col span={4} className="breadcrumb-title">
          标题
        </Col>
        <Col span={20} className="weather">
          <span className="date">{time}</span>
          <span className="weather-datail">{weather}</span>
        </Col>
      </Row>
    </div>
  );
}
export default Header;
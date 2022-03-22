import { Card, Button } from 'antd';
import React from 'react';
import './index.less'

const Buttons = () => {
  return (
    <Card title="基础按钮" className="card-wrap">
      <Button type='primary'>Ezan</Button>
      <Button>Ezan</Button>
      <Button type='dashed'>Ezan</Button>
      <Button type='primary' danger>Ezan</Button>
      <Button disabled >Ezan</Button>
    </Card>
  );
}

export default Buttons;
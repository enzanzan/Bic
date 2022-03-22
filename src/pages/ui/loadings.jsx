import { Card, Button, Spin } from 'antd';
import React from 'react';
import './index.less'

const Loadings = () => {
    return (
        <Card title="加载中" className="card-wrap">
            <Spin size="small" />
            <Spin style={{ margin: "0 10px" }} />
            <Spin size="large" />
        </Card>
    );
}

export default Loadings;
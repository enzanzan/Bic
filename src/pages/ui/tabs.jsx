import { Card, Button, Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import './index.less'

const { TabPane } = Tabs;
const Tab = () => {
    const callback = () => {

    }

    return (
        <Card title="标签页" className="card-wrap">
            <Tabs onChange={callback} type="card" >
                <TabPane tab="Tab 1" key="1">EnZan 后台管理系统1</TabPane>
                <TabPane tab="Tab 2" key="2">EnZan 后台管理系统2</TabPane>
                <TabPane tab="Tab 3" key="3">EnZan 后台管理系统3</TabPane>
            </Tabs>
        </Card>
    );
}

export default Tab;
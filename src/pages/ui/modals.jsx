import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'antd';
import './index.less'

const Modals = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }
    return (
        <Card title="模态框" className="card-wrap">
            <Button type="primary" onClick={showModal}>弹框</Button>
            <Modal title="提示信息"
                visible={isModalVisible}
                okText="测试确定"
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>EnZan 后台管理系统</p>
                <p>EnZan 后台管理系统</p>
                <p>EnZan 后台管理系统</p>
            </Modal>
        </Card>
    );
}

export default Modals;
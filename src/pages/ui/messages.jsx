import { Card, Button, message } from 'antd';
import React from 'react';
import './index.less'

const Messages = () => {
    const key = 'updatable'
    const messages = (type) => {
        if (type === "info") {
            message[type]("提示");
        } else if (type === "success") {
            message.loading({ content: "loading...", key })
            setTimeout(() => {
                message.success({ content: "成功", key });
            }, 1000);
        } else if (type === "error") {
            message[type]("错误");
        } else {
            message[type]("警告");
        }
    }
    return (
        <Card title="全局提示" className="card-wrap">
            <Button type="primary" onClick={() => messages("info")}>提示</Button>
            <Button type="primary" onClick={() => messages("success")}>成功</Button>
            <Button type="primary" onClick={() => messages("error")}>错误</Button>
            <Button type="primary" onClick={() => messages("warning")}>警告</Button>
        </Card>
    );
}

export default Messages;

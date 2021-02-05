import React, { useState } from "react";
import { Typography, Spin, Form, Input, Button, message } from "antd";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleLoading = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      form
        .validateFields()
        .then(() => {
          message.success("Youpi!");
          form.resetFields();
        })
        .catch(() => {
          message.error("Not good bro!");
        });
    }, 1000);
  };

  return (
    <Spin spinning={isLoading}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography.Title>Login</Typography.Title>
        <Form form={form}>
          <Form.Item
            name="name"
            label="Name"
            style={{ width: "320px" }}
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            style={{ width: "320px" }}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleLoading} htmlType="submit">
              GO !
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Spin>
  );
}

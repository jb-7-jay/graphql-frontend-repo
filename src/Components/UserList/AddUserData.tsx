import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { UserType } from ".";

const UserFormModal = ({
  userColumnData,
  setUserColumnData,
  visible,
  setVisible,
}: {
  userColumnData: UserType[];
  setUserColumnData: (type: UserType[]) => void;
  visible: boolean;
  setVisible: (type: boolean) => void;
}) => {
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const onFinish = (values: UserType) => {
      setUserColumnData([...userColumnData, values]);
      handleCancel();
  };

  const formFields = [
    {
      name: "name",
      label: "Name",
      rules: [{ required: true, message: 'Please enter a username' }]
    },
    {
      name: "email",
      label: "Email",
      rules: [{ required: true, message: 'Please enter a email' }]
    },
    {
      name: "Mobile",
      label: "mobile",
      rules: [{ required: true, message: 'Please enter a mobile' }]
    },
    {
      name: "Gender",
      label: "gender",
      rules: [{ required: true, message: 'Please enter a gender' }]
    },
    {
      name: "Country",
      label: "country",
      rules: [{ required: true, message: 'Please enter a country' }]
    },
    {
      name: "City",
      label: "city",
      rules: [{ required: true, message: 'Please enter a city' }]
    },
  ];

  return (
    <>
      <div style={{ textAlign: "right" }}>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
      </div>
      <Modal open={visible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} onFinish={onFinish}>
          {formFields.map((field) => (
            <Form.Item key={field.name} name={field.name} label={field.label} rules={field.rules}>
              <Input />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};

export default UserFormModal;

import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { UserType } from ".";
import { useAddUserMutation } from "../../generated/graphql";

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


   const [addUserMutation, { data, loading, error }] = useAddUserMutation();
   
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

  const onFinish = async (values: UserType) => {
    console.log('values', values)

    const {data}=  await addUserMutation({
      variables: {
        name: values.name,
        email: values.email,
        gender: values.gender,
      },
    })

    console.log('data', data)

    if (data) {
      handleCancel();
    }
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
      name: "gender",
      label: "gender",
      rules: [{ required: true, message: 'Please enter a gender' }]
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

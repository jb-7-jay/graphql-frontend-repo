import React from 'react'
import { Button, Form, Input, Modal, Select } from 'antd'
// import { User } from '../../types'

// interface UserFormModalProps {
//   visible: boolean
//   onClose: () => void
//   onSubmit: (values: Omit<User, '_id'>) => void
//   initialValues?: User
//   title: string
// }

export const UserFormModal: React.FC<any> = ({
  visible,
  onClose,
  onSubmit,
  initialValues,
  title,
}) => {
  const [form] = Form.useForm()

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      onSubmit(values)
      form.resetFields()
    } catch (error) {
      console.error('Validation failed:', error)
    }
  }

  return (
    <Modal open={visible} title={title} onCancel={onClose} onOk={handleSubmit}>
      <Form form={form} layout="vertical" initialValues={initialValues}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please select gender!' }]}
        >
          <Select>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

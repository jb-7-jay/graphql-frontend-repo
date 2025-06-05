import React, { useState } from 'react'
import { Button, Space, Table, message } from 'antd'
import {
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  type User,
} from '../../graphql/generated/graphql'
import { UserFormModal } from './UserFormModal'

export const UserList = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { data, isLoading } = useGetUsersQuery()
  const addUser = useAddUserMutation()
  const deleteUser = useDeleteUserMutation()
  console.log('data', data)

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record: User) => (
        <Space>
          <Button
            type="link"
            onClick={() => {
              //   setEditingUser(record)
              setModalVisible(true)
            }}
          >
            Edit
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleDelete(record._id as any)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  const handleCreate = async (values: Omit<User, '_id'>) => {
    try {
      await addUser.mutateAsync(values as any)
      message.success('User created successfully')
      setModalVisible(false)
    } catch (error) {
      message.error('Failed to create user')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteUser.mutateAsync({ id })
      message.success('User deleted successfully')
    } catch (error) {
      message.error('Failed to delete user')
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={() => {
            // setEditingUser(null)
            setModalVisible(true)
          }}
        >
          Add User
        </Button>
      </div>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={[]}
        // dataSource={data?.users || []}
        rowKey="_id"
      />

      <UserFormModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false)
          //   setEditingUser(null)
        }}
        onSubmit={handleCreate}
        // onSubmit={editingUser ? handleUpdate : handleCreate}
        // initialValues={editingUser || undefined}
        title={'Create User'}
        // title={editingUser ? 'Edit User' : 'Create User'}
      />
    </div>
  )
}

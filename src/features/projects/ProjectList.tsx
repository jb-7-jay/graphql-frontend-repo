import { useState } from 'react'
import { Table, Button, Space, Tag, message } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  useGetProjectsQuery,
  useDeleteProjectMutation,
  type Project,
} from '../../graphql/generated/graphql'
import { ProjectDetailsModal } from './ProjectDetailsModal'

export const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [detailsModalVisible, setDetailsModalVisible] = useState(false)

  const { data, isLoading } = useGetProjectsQuery()

  const deleteProjectMutation = useDeleteProjectMutation({
    onSuccess: () => {
      message.success('Project deleted successfully')
    },
    onError: (error) => {
      message.error(
        error instanceof Error ? error.message : 'Failed to delete project'
      )
    },
  })

  const getStatusColor = (status: string | null | undefined) => {
    switch (status) {
      case 'Not Started':
        return 'default'
      case 'In Progress':
        return 'processing'
      case 'Completed':
        return 'success'
      default:
        return 'default'
    }
  }

  const columns: ColumnsType<Project> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            setSelectedProject(record)
            setDetailsModalVisible(true)
          }}
        >
          {record.title}
        </Button>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
      filters: [
        { text: 'Not Started', value: 'Not Started' },
        { text: 'In Progress', value: 'In Progress' },
        { text: 'Completed', value: 'Completed' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Assigned To',
      key: 'user',
      render: (_, record) => record.user?.name || 'Unassigned',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            danger
            onClick={() => handleDelete(record._id as string)}
            loading={deleteProjectMutation.isPending}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  const handleDelete = async (id: string) => {
    await deleteProjectMutation.mutateAsync({ id })
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary">Create Project</Button>
      </div>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={data?.projects as Project[]}
        rowKey="_id"
        pagination={{ pageSize: 7, total: data?.projects?.length || 0 }}
      />

      <ProjectDetailsModal
        visible={detailsModalVisible}
        onClose={() => {
          setDetailsModalVisible(false)
          setSelectedProject(null)
        }}
        project={selectedProject}
      />
    </div>
  )
}

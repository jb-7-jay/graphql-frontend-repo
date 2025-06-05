import { Modal, Descriptions, Tag } from 'antd'
import type { Project } from '../../graphql/generated/graphql'

interface ProjectDetailsModalProps {
  project: Project | null
  visible: boolean
  onClose: () => void
}

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

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  visible,
  onClose,
}) => {
  if (!project) return null

  return (
    <Modal
      open={visible}
      title="Project Details"
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Title">{project.title}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {project.description}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color={getStatusColor(project.status)}>{project.status}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Assigned To">
          {project.user
            ? `${project.user.name} (${project.user.email})`
            : 'Unassigned'}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  )
}

import React from 'react'
import { Layout as AntLayout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const { Header, Content } = AntLayout

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: '/',
              label: <Link to="/">Users</Link>,
            },
            {
              key: '/projects',
              label: <Link to="/projects">Projects</Link>,
            },
          ]}
        />
      </Header>
      <Content style={{ padding: '2rem' }}>{children}</Content>
    </AntLayout>
  )
}

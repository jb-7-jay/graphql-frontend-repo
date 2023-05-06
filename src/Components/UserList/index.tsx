import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Space, Table } from "antd";
import UserFormModal from "./AddUserData";

export interface UserType {
  key: React.Key;
  name: string;
  mobile: string;
  email: string;
  gender: string;
  country: string;
  city: string;
}

export function UserList() {
  const [userColumnData, setUserColumnData] = useState<UserType[]>([
    {
      key: "1",
      name: "John Brown",
      mobile: "9998874588",
      email: "abc@gmail.com",
      gender: "male",
      country: "India",
      city: "Ahmedabad",
    },
  ]);
  const [visible, setVisible] = useState<boolean>(false);

  const columns: ColumnsType<UserType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => setVisible(true)}
          >
            Edit
          </div>
          <div style={{ cursor: "pointer", color: "blue" }}>Delete</div>
        </Space>
      ),
    },
  ];

  return (
    <div className="w-full h-full border border-gray-400">
      <UserFormModal
        userColumnData={userColumnData}
        setUserColumnData={setUserColumnData}
        visible={visible}
        setVisible={setVisible}
      />
      <Table columns={columns} dataSource={userColumnData} size="middle" />
    </div>
  );
}

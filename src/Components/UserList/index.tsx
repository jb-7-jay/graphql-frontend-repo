import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Space, Table } from "antd";
import UserFormModal from "./AddUserData";
import { useUserQuery } from "../../generated/graphql";

export interface UserType {
  key: React.Key;
  name: string;
  email: string;
  gender: string;
}

export function UserList() {
  const {data} = useUserQuery()

  const [userColumnData, setUserColumnData] = useState<UserType[]>([]);
  

  useEffect(() => {
    if (data?.users) {
      setUserColumnData(data.users as UserType[])
    }
  }, [data])
  
  const [visible, setVisible] = useState<boolean>(false);

  const columns: ColumnsType<UserType> = [
    {
      title: "Name",
      dataIndex: "name",
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

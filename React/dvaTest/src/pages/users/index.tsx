import { Table, Tag, Space } from 'antd';
import {connect} from 'umi';
const index = ({ users }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Create Time',
      key: 'create_time',
      dataIndex: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="list-table">
      <Table columns={columns} dataSource={users.data} />
    </div>
  );
};

//redux连接方法
const mapStateToProps = ({ users }) => {
  //处理state数据
  return {
    users, //对应model里的namespace
  };
};

export default connect(mapStateToProps)(index);

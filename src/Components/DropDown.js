import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
const items = [
  {
    label: <Link to="/Edit_Add_delete" >Admin</Link>,
    key: '0',
  },
  {
    label: <Link to="/Create_account" >Create an Acc.</Link>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <Link to="/userLogin" >Logout <i class="bi bi-box-arrow-right"></i>
    </Link>,
    key: '3',
  },
];
const DropDown = () => (
  <Dropdown className='text-dark'
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      Admin
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
);
export default DropDown;
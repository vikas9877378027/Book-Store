import { Button, Modal } from 'antd';
import { useState } from 'react';
import LoginForm from './LoginForm';
import { Navigate } from 'react-router-dom';
import AddBook from '../CRUD/AddBook';
const Dialog = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText(<LoginForm/>);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      Navigate("/Edit_Add_delete");
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Button  onClick={showModal}>
       Admin Login
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      {/* <AddBook/> */}
      </Modal>
    </>
  );
};
export default Dialog;
import Layout from 'antd/lib/layout';
import { Flex, Menu } from 'antd';
import cls from './Header.module.css';
import { useState } from 'react';
import { CreateModal } from './create-modal/CreateModal.jsx';

export const Header = () => {
  const [isCreationOpen, setIsCreationOpen] = useState(false);

  const onCreationOpen = () => setIsCreationOpen(true);
  const onCreationClose = () => setIsCreationOpen(false);

  const menuItems = [
    {
      key: 'create',
      label: <span onClick={onCreationOpen}>Создать заявку</span>,
    },
  ];

  return (
    <Layout.Header>
      <Flex align="start" justify="space-between" className={cls.container}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Flex>
      <CreateModal isOpen={isCreationOpen} onClose={onCreationClose} />
    </Layout.Header>
  );
};

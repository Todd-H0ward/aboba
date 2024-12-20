import { Button, Flex, Form, Input, Modal } from 'antd';
import Typography from 'antd/lib/typography';
import {
  TicketContext,
  TicketProvider,
} from '../../../providers/TicketProvider.jsx';
import { useContext } from 'react';

const { Title } = Typography;

export const CreateModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const { addTicket } = useContext(TicketContext);

  const onFinish = (values) => {
    addTicket(values);
    onClose();
    form.resetFields();
  };

  return (
    <TicketProvider>
      <Modal
        open={isOpen}
        onClose={onClose}
        onCancel={onClose}
        footer={null}
        style={{ top: '20%' }}
      >
        <Flex vertical>
          <Title>Создание заявки</Title>

          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
              label="Краткое наименование"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Введите краткое наименование',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Заявитель"
              name="requester"
              rules={[
                {
                  required: true,
                  message: 'Укажите заявителя',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button htmlType="submit" type="primary" size="large">
              Создать
            </Button>
          </Form>
        </Flex>
      </Modal>
    </TicketProvider>
  );
};

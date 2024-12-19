import { Button, Flex, Form, Input, Modal } from 'antd';
import Typography from 'antd/lib/typography';
import { useForm } from 'antd/es/form/Form.js';
import TextArea from 'antd/es/input/TextArea.js';
import { useContext } from 'react';
import {
  TicketContext,
  TicketProvider,
} from '../../../../components/providers/TicketProvider.jsx';

const { Title } = Typography;

export const EditTicketModal = ({ isOpen, onClose, ticket }) => {
  const { editTicket } = useContext(TicketContext);
  const [form] = useForm();

  const onAccept = () => {
    editTicket(ticket, 'Заявка принята');
    onClose();
  };

  const onFinish = () => {
    editTicket(ticket, 'Заявка выполнена');
    onClose();
  };

  return (
    <TicketProvider>
      <Modal
        open={isOpen}
        onClose={onClose}
        onCancel={onClose}
        footer={null}
        width={550}
        style={{ top: '30%' }}
      >
        <Flex vertical gap={25}>
          <Title level={2}>Редактирование заявки №{ticket}</Title>

          <Form layout="vertical" form={form}>
            <Form.Item label="Комментарий к заявке" name="comment">
              <TextArea rows={5} />
            </Form.Item>
            <Flex justify="space-between">
              <Button onClick={onAccept}>Принять заявку</Button>
              <Button onClick={onFinish}>Завершить заявку</Button>
            </Flex>
          </Form>
        </Flex>
      </Modal>
    </TicketProvider>
  );
};

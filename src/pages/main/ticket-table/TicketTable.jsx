import { Table } from 'antd';
import { useContext, useState } from 'react';
import { TicketContext } from '../../../components/providers/TicketProvider.jsx';
import { EditTicketModal } from './edit-ticket-modal/EditTicketModal.jsx';

export const TicketTable = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const { tickets } = useContext(TicketContext);

  const onEditOpen = (ticketId) => {
    setSelectedTicket(ticketId);
    setIsEditOpen(true);
  };

  const onEditClose = () => {
    setIsEditOpen(false);
    setSelectedTicket(null);
  };

  const columns = [
    { title: 'Номер заявки', dataIndex: 'id', key: 'id' },
    { title: 'Краткое наименование', dataIndex: 'title', key: 'title' },
    { title: 'Заявитель', dataIndex: 'requester', key: 'requester' },
    { title: 'Дата зявки', dataIndex: 'date', key: 'date' },
    { title: 'Время заявки', dataIndex: 'time', key: 'time' },
    { title: 'Начало работы', dataIndex: 'timeStart', key: 'timeStart' },
    { title: 'Статус', dataIndex: 'status', key: 'status' },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={tickets}
        pagination={false}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => onEditOpen(record.id),
        })}
      />
      {selectedTicket && (
        <EditTicketModal
          isOpen={isEditOpen}
          onClose={onEditClose}
          ticket={selectedTicket}
        />
      )}
    </>
  );
};

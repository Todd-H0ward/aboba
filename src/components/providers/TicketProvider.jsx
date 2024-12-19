import { createContext, useState } from 'react';

export const TicketContext = createContext({});

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  const addTicket = ({ title, requester }) => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const currentDate = date.toLocaleDateString();
    const status = 'Заявка не обработана';

    const newTickets = [
      ...tickets,
      {
        id: tickets.length + 1,
        title,
        requester,
        date: currentDate,
        time,
        timeStart: '',
        status,
      },
    ];

    setTickets(newTickets);
  };

  const getTicket = (id) => {
    return tickets.find((ticket) => ticket.id === id);
  };

  const editTicket = (id, status) => {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status,
          timeStart: new Date().toLocaleTimeString(),
        };
      }
      return ticket;
    });

    setTickets(updatedTickets);
  };

  return (
    <TicketContext.Provider
      value={{ tickets, addTicket, getTicket, editTicket }}
    >
      {children}
    </TicketContext.Provider>
  );
};

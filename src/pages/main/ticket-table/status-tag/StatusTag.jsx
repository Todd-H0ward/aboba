import { Tag } from 'antd';

export const StatusTag = ({ status }) => {
  let color;
  if (status === 'Заявка не обработана') {
    color = 'blue';
  } else if (status === 'Заявка принята') {
    color = 'green';
  } else {
    color = 'red';
  }
  return <Tag color={color}>{status}</Tag>;
};

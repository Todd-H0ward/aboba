import { PageWrapper } from '../../components/layout/page-wrapper/PageWrapper.jsx';
import cls from './MainPage.module.css';
import { TicketTable } from './ticket-table/TicketTable.jsx';

export const MainPage = () => {
  return (
    <PageWrapper>
      <div className={cls.container}>
        <TicketTable />
      </div>
    </PageWrapper>
  );
};

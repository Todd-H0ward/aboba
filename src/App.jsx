import { App as AntdApp, Layout } from 'antd';
import { Header } from './components/layout/header/Header.jsx';
import './assets/styles/index.css';
import { TicketProvider } from './components/providers/TicketProvider.jsx';
import { MainPage } from './pages/main/MainPage.jsx';

function App() {
  return (
    <TicketProvider>
      <AntdApp className="app">
        <Layout>
          <Header />
          <MainPage />
        </Layout>
      </AntdApp>
    </TicketProvider>
  );
}

export default App;

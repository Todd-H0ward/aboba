import Layout from 'antd/lib/layout';
import cls from './PageWrapper.module.css';

const { Content } = Layout;

export const PageWrapper = ({ children }) => {
  return (
    <Content>
      <div className={cls.wrapper}>{children}</div>
    </Content>
  );
};

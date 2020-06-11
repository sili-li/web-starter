import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import React from 'react';
import './App.css';
import AppRouter from './router';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <AppRouter />
    </ConfigProvider>
  );
};

export default App;

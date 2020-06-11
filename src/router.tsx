import React from 'react';

import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Test from './pages/test/index';

export interface RouteType {
  routerPath: string;
  title: string;
  component: React.ComponentType;
  cache?: boolean; // 为true时，缓存页面，返回上一页的时候，
  // 上一页的滚动条、动作状态等等和离开这个页面时的状态保持一致。
}

const routeConfigs: RouteType[] = [
  {
    routerPath: '',
    title: '首页',
    component: Home,
  },
  {
    routerPath: 'test',
    title: '测试页面',
    component: Test,
  },
];

function AppRouter() {
  return (
    <BrowserRouter>
      <CacheSwitch>
        {routeConfigs.map((route: RouteType, index: number) => {
          return route.cache ? (
            <CacheRoute exact={true} path={`${route.routerPath}`} key={index} component={route.component} />
          ) : (
            <Route exact={true} path={`/${route.routerPath}`} key={index} component={route.component} />
          );
        })}
        <Redirect to="/" />
      </CacheSwitch>
    </BrowserRouter>
  );
}

export default AppRouter;

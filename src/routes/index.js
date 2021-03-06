import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './private-route';
import Loadable from 'react-loadable';

import Loading from '../components/Loading';

const Tables = Loadable({
  loader: () => import('../pages/Tables'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('../pages/Login'),
  loading: Loading,
})

const Order = Loadable({
  loader: () => import('../pages/Order'),
  loading: Loading,
})

const Pre_payment = Loadable({
  loader: () => import('../pages/Pre_payment'),
  loading: Loading,
})
const Payment = Loadable({
  loader: () => import('../pages/Payment'),
  loading: Loading,
});

const Chef = Loadable({
  loader: () => import('../pages/Chef'),
  loading: Loading,
});

const Admin = Loadable({
  loader: () => import('../pages/Admin'),
  loading: Loading,
});

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Tables,
    isPrivate: true,
  },
  {
    path: '/order/:id',
    component: Order,
    isPrivate: true,
  },
  {
    path: '/pre_payment/:id',
    component: Pre_payment,
    isPrivate: true,
  },
  {
    path: '/payment',
    component: Payment,
    isPrivate: true,
  },
  {
    path: '/chef',
    component: Chef,
    isPrivate: true,
  },
  {
    path: '/admin',
    component: Admin,
    isPrivate: true,
  },
  {
    path: '*',
    component: () => <div>404!</div>,
  },

];

export default () => (
  <Switch>
    {routes.map(({ path, component, exact = true, isPrivate }, index) => {
      if (!isPrivate) {
        return (
          <Route key={index} path={path} component={component} exact={exact} />
        );
      } else {
        return (
          <PrivateRoute
            key={index}
            path={path}
            component={component}
            exact={exact}
          />
        );
      }
    })}
  </Switch>
);

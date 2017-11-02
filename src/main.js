import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';

import Layout from './container/layout';
import HomeRoute from './container/home';
import PickerRoute from './container/picker/picker-demo';

import './scss/index.scss';


render(
  <BrowserRouter>
        <Layout>
            <Route exact path="/" component={HomeRoute}></Route>
            <Route path="/picker-demo" component={PickerRoute}></Route>
        </Layout>
  </BrowserRouter>,
  document.getElementById('app')
);


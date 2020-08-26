import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from '../src/components/Footer';
import Empty from '../src/pages/Empty';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route component={Empty}/>
      </Switch>
      <Footer />
    </BrowserRouter>,
  document.getElementById('root')
);


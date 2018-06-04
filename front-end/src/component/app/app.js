import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashoard from '../dashboard/dashboard';

export default class App extends React.Component {
  render() {
    return (
        <div className='app'>
          <BrowserRouter>
            <div>
              <Route exact path='/' compoonent={Dashboard} />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

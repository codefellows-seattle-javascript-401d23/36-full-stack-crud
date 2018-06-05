import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/landing';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>Countries of the World</h1>
            </header>
            <Route
              exact
              path="/"
              component={Landing}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

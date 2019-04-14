import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import App from './App';
import { shallow } from 'enzyme';

describe('App Component render', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

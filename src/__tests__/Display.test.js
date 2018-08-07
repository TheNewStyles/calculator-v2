import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../Components/Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display />, div);
  ReactDOM.unmountComponentAtNode(div);
});
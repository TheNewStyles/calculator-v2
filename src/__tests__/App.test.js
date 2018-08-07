import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
// import isANumber from '../Components/App';

describe('App Calculator ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('calculates sum correctly', () => {
    // const mockCallback = jest.fn();
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // App.isANumber("a");

    // // The mock function is called twice
    // expect(mockCallback.mock.calls.length).toBe(2);
  });

});




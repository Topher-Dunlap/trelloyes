import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// make the App component available
import App from './App';
import STORE from './STORE'

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, div);
  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<App store={STORE} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

/* eslint-disable no-undef */
import App from '../App';
import ComponentWithProps from '../components/ComponentWithProps';

const { render } = require('@testing-library/react');

it('should match the snapshot', () => {
  expect(render(<App />)).toMatchSnapshot();
});

it('should render prop', () => {
  expect(render(<ComponentWithProps text="bloop" />)).toMatchSnapshot();
});

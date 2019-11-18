// __tests__/Intro-test.js
import React from 'react';
import Home from '../src/pages/Home.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
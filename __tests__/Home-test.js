// __tests__/Intro-test.js
import React from 'react';
import Home from '../src/pages/Home.js';
import SliderEntry from '../src/components/SliderEntry';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('slider render correctly', () => {
  const treeComponent = renderer.create (<SliderEntry />).toJSON();
  expect(treeComponent).toMatchSnapshot();
});
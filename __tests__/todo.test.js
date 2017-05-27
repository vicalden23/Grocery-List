import React from 'react';
import { shallow, mount, render } from 'enzyme';


import App from '../app/app';
import Todo from '../app/list';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
    expect(shallow(<App />).contains(<h1>Hello</h1>)).toBe(false);
  });
});

describe('<App />', () => {

  it('renders list', () => {
    expect(shallow(<App />).find(Todo).length).toEqual(1);
  });
});
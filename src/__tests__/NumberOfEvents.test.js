import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}} updateEvents={() => {}}/>);
  }) 
  
  test('renders the component', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
  });
  
  test('user sees 32 events by default', () => {
    expect(NumberOfEventsWrapper.find('input.number').prop('type')).toBe('number');
    expect(NumberOfEventsWrapper.state('number')).toBe(32);
  });  
  
  test('should change number of events', () => {
    expect(NumberOfEventsWrapper.state('number')).toBe(32);
    NumberOfEventsWrapper.find('input.number').simulate('change', {
    target: { value: 10 },   
    });
    expect(NumberOfEventsWrapper.state('number')).toBe(10);
  });

});
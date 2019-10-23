import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { removeDublicates } from "../helpers/general"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('removes dublicates from array', () => {
  const withDublicateValues = [{ 'object1': 1 }, { 'object1': 1 }, { 'object1': 2 }, { 'object1': 2 }]
  const withoutDublicateValues = [{ 'object1': 1 }, { 'object1': 2 }]
  let result = removeDublicates(withDublicateValues)
  expect(result).toStrictEqual(withoutDublicateValues);
})
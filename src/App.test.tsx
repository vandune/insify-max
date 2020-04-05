import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Opens the form', () => {
  const wrapper = render(<App />);
  fireEvent.click(wrapper.getByText("No, it’s not"));
  expect(wrapper.getByText("What’s your company size?")).toBeInTheDocument();
  expect(wrapper.getByText("And what are your main activities?")).toBeInTheDocument();
})

test('Closes the form', () => {
  const wrapper = render(<App />);
  fireEvent.click(wrapper.getByText("No, it’s not"));
  expect(wrapper.getByText("What’s your company size?")).toBeInTheDocument();
  fireEvent.click(wrapper.getByText("Cancel"));
  expect(wrapper.getByText("No, it’s not")).toBeInTheDocument();
})

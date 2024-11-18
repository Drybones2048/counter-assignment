// import necessary react testing library helpers here
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
// import the Counter component here
import Counter from '../components/Counter';

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter/>);
  const counterMessage = screen.getByText(/Counter/i); //gets the screen and checks if the counter message is present
  expect(counterMessage).toBeInTheDocument(); //checks to see if the counter message is present
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterVal = screen.getByTestId("count"); //gets the count variable
  expect(counterVal).toHaveTextContent("0"); //checks to see if the count variable starts off being initialized to 0
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const incrementButton = screen.getByText("+"); //gets the plus symbol on screen
  const counterVal = screen.getByTestId("count"); //gets the count variable
  fireEvent.click(incrementButton); //clicks the incriment button
  expect(counterVal).toHaveTextContent("1"); //checks to see if the value of count is now equal to 1 
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const decrementButton = screen.getByText("-"); //gets the subtract symbol on screen
  const counterVal = screen.getByTestId("count"); //gets the count variable
  fireEvent.click(decrementButton); //clicks the decriment button
  expect(counterVal).toHaveTextContent("-1"); //checks to see if the value has been decremented to -1 
});

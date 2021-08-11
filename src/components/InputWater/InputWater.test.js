import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { fireEvent, render } from "@testing-library/react";
import InputWater from "./InputWater";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup DOM elem as render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exit;
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

const setup = () => {
  const utils = render(<InputWater />)
  const input = utils.getByLabelText('input-water')
  return {
    input,
    ...utils,
  }
}

// Make sure it renders to the browser correctly.
it("renders without an issue", () => {
  render(<InputWater />, container);
});

// Make sure it takes only valid inputs.
it("Does not accept anything other than 0-9 and ' ' ", () => {
  const {input} = setup();
  fireEvent.change(input, {target: {value: 'abcdefg'}});
  expect(input.value).toBe('');
});

it("Will trim down extra spaces between words", () => {
  const {input} = setup();
  let text = "1 2";
  fireEvent.change(input, {target: {value: text}});
  text = text + " ";
  fireEvent.change(input, {target: {value: text}});
  text = text + "3";
  fireEvent.change(input, {target: {value: text}});
  text = text + "4";
  fireEvent.change(input, {target: {value: text}});
  text = text + " ";
  fireEvent.change(input, {target: {value: text}});
  text = text + " ";
  fireEvent.change(input, {target: {value: text}});
  text = text + "5";
  fireEvent.change(input, {target: {value: text}});
  expect(input.value).toBe('1 2 34 5');
});
// Make sure it outputs proper outputs (array)
// Make sure max num and min num are correct
// Make sure spaces aren't included in final array.
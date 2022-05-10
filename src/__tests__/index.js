import { fireEvent, render, screen } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import App from "../App";

test("search form could be used", async () => {
  render(<App />);

  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(button);

  const title = await screen.findByText("Matrix");
  expect(title).toBeVisible();
});

/*
Alternatives for asynchronous components

test('renders without crashing', async () => {
  const { findByText } = render(<App />)
  const title = await findByText(/Última búsqueda/i)
  expect(title).toBeInTheDocument()
})

The previous one is the more correct one

test('home works as expected', async () => {
  const { container } = render(<App />)
  const gifLink = await wait(() => container.querySelector('.Gif-link'))
  expect(gifLink).toBeVisible()
})
*/

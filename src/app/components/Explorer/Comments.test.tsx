import { render, screen } from "@testing-library/react";
import Comments from "./Comments";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("Rendering Comments", () => {
  it("should render comments", () => {
    render(<Comments />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

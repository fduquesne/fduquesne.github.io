import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages/index";

test("renders a text", () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText(
    "Find in-depth information about Next.js features and API."
  );
  expect(linkElement).toBeInTheDocument();
});

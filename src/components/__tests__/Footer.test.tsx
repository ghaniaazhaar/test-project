import { render } from "@testing-library/react";
import Footer from "../Footer/Footer";
import '@testing-library/jest-dom';
import React from "react";

describe("Footer", () => {
  it("renders the footer with the correct text", () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText(/© 2024 My Next.js App/i);
    expect(footerText).toBeInTheDocument();
  });
});

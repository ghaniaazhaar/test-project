
import { render } from "@testing-library/react";
import CustomButton from "../Button/Button";

describe("CustomButton", () => {
  it("renders a button with the correct label", () => {
    const { getByText } = render(<CustomButton label="Click Me" />);
    const button = getByText(/click me/i); 
    expect(button).toBeInTheDocument(); 
  });
});

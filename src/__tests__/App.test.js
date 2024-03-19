import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
test("pizza checkbox is initially unchecked", () => {
    render(<App />);
  
    const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  
    expect(addPepperoni).not.toBeChecked();
  });
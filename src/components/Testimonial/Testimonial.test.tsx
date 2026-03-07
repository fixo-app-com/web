import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonial from "./Testimonial";

describe("Testimonial", () => {
  it("renders the first testimonial quote", () => {
    render(<Testimonial />);
    expect(
      screen.getByText(/every expense tracker out there but always quit/),
    ).toBeInTheDocument();
  });

  it("renders navigation dots for all reviews", () => {
    render(<Testimonial />);
    expect(screen.getByLabelText("Go to review 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to review 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to review 3")).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "./page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("SignUp Page", () => {
  it("renders signup form fields", () => {
    render(<SignUp />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email or Phone Number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Create Account")).toBeInTheDocument();
  });

  it("redirects to login on submit", () => {
    const router = useRouter();
    render(<SignUp />);
    fireEvent.change(screen.getByPlaceholderText("Name"), { target: { value: "Test User" } });
    fireEvent.change(screen.getByPlaceholderText("Email or Phone Number"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password123" } });
    fireEvent.click(screen.getByText("Create Account"));
    expect(router.push).toHaveBeenCalledWith("/login");
  });
});
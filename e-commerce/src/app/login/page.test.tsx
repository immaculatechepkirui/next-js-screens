import { render, screen, fireEvent } from '@testing-library/react';
import Login from './page';

describe('Login Page', () => {
  it('renders login form', () => {
    render(<Login />);
    expect(screen.getByText(/Log in to Exclusive/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email or Phone Number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });
})

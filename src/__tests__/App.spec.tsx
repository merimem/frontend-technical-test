import { render, screen } from '@testing-library/react';

import App from '../pages/index';

describe('Should render the app without crashing', () => {
  it('Renders the home page', () => {
    render(<App />);
    expect(
      screen.getByRole('button', { name: 'button-submit' })
    ).toBeInTheDocument();
  });
});
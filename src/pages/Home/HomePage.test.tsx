import { screen } from '@testing-library/react';

import { render } from '../../theme/theme-test-utils';
import { HomePage } from './HomePage';
import { HomePageTestIds } from './HomePageTestIds';

describe('Home page', () => {
  it('should render title', () => {
    render(<HomePage />);

    expect(screen.getByTestId(HomePageTestIds.Title)).toHaveTextContent('Home page');
  });
});

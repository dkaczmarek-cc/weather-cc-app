import { render, screen } from 'theme/theme-test-utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget/TemperatureWidgetTestIds';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render temperature widget', () => {
    render(<HomePage />);

    const temperatureWidget = screen.getByTestId(TemperatureWidgetTestIds.Container);

    expect(temperatureWidget).toBeInTheDocument();
  });
});

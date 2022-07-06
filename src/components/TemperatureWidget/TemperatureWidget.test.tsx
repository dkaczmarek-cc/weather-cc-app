import { render, screen } from 'theme/theme-test-utils';
import { TemperatureWidget } from './TemperatureWidget';
import { TemperatureWidgetTestIds } from './TemperatureWidgetTestIds';

describe('Temperature widget', () => {
  it('should render footer', () => {
    render(<TemperatureWidget />);
    const container = screen.getByTestId(TemperatureWidgetTestIds.container);
    expect(container).toBeInTheDocument();
  });
});

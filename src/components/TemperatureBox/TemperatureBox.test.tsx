import { render, screen } from 'test-utils';
import { TemperatureBox } from './TemperatureBox';
import { TemperatureBoxTestIds } from './TemperatureBoxTestIds';

describe('TemperatureBox', () => {
  it('should render widget wrapper', () => {
    render(<TemperatureBox />);

    expect(screen.getByTestId(TemperatureBoxTestIds.Container)).toBeInTheDocument();
  });
});
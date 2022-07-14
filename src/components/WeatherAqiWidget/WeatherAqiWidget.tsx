import { Container } from 'components/WeatherWidgetInfo';
import { WeatherAqiWidgetTestIds } from './WeatherAqiWidgetTestIds';

interface Props {
  defraIndex: number;
}

const WeatherAqiWidget = ({ defraIndex }: Props) => {
  return <Container defraIndex={defraIndex} data-testid={WeatherAqiWidgetTestIds.Container}></Container>;
};

export { WeatherAqiWidget };
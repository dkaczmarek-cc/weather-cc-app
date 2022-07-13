import { Container, Value, Property, WeatherData } from './WeatherInfoWidget.styled';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  cloud: number;
  windSpeed: number;
  precip: number;
  pressure: number;
  gust: number;
}

const WeatherInfoWidget = ({ humidity, cloud, windSpeed, precip, pressure, gust }: Props) => {
  const roundedHumidity = Math.round(humidity);
  const roundedPrecip = Math.round(precip);
  const roundedPressure = Math.round(pressure);
  const roundedWindSpeed = Math.round(windSpeed);
  const roundedCloud = Math.round(cloud);
  const roundedGust = Math.round(gust);

  return (
    <Container data-testid={WeatherInfoWidgetTestIds.Container}>
      <WeatherData>
        <Property>Cloudiness:</Property>
        <Value>{roundedCloud}%</Value>
      </WeatherData>
      <WeatherData>
        <Property>Precip:</Property>
        <Value>{roundedPrecip}&nbsp;mm</Value>
      </WeatherData>
      <WeatherData>
        <Property>Humidity:</Property>
        <Value>{roundedHumidity}%</Value>
      </WeatherData>
      <WeatherData>
        <Property>Pressure:</Property>
        <Value>{roundedPressure}&nbsp;mb</Value>
      </WeatherData>
      <WeatherData>
        <Property>Wind:</Property>
        <Value>{roundedWindSpeed} km/h</Value>
      </WeatherData>
      <WeatherData>
        <Property>Gusts:</Property>
        <Value>{roundedGust}&nbsp;km/h</Value>
      </WeatherData>
    </Container>
  );
};

export { WeatherInfoWidget };
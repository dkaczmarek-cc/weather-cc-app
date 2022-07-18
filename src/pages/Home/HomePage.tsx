import Weather from 'api/services/Weather';
import { useState } from 'react';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WeatherAqiWidget } from 'components/WeatherAqiWidget';
import { WeatherInfoWidget } from 'components/WeatherInfoWidget';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);

  return (
    <div data-testid={HomePageTestIds.HomePage}>
      <WidgetWrapper>
        {data && (
          <>
            <WeatherInfoWidget
              cloud={data.current.cloud}
              precip={data.current.precip_mm}
              humidity={data.current.humidity}
              pressure={data.current.pressure_mb}
              windSpeed={data.current.wind_kph}
              gust={data.current.gust_kph}
            />
            <TemperatureWidget
              icon={data.current.condition.icon}
              description={data.current.condition.text}
              currentTemperature={data.current.temp_c}
              feelslikeTemperature={data.current.feelslike_c}
            />
            <WeatherAqiWidget
              defraIndex={data.current.air_quality['gb-defra-index']}
              pm25={data.current.air_quality.pm2_5}
            />
          </>
        )}
      </WidgetWrapper>
    </div>
  );
};

export { HomePage };

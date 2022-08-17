import Weather from 'api/services/Weather';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { convertSpecialCharacters } from 'utils/convertSpecialCharacters';
import { PageContentContainer } from 'components/PageContentContainer';
import { WidgetWrapper } from 'components/WidgetWrapper';
import { CityPageTestIds } from './CityPageTestIds';
import { CityNameWidget } from './components/CityNameWidget';
import { NearestCitiesWeatherWidget } from './components/NearestCitiesWeatherWidget';

type Params = {
  city: string;
};

const CityPage = () => {
  const { city } = useParams() as Params;
  const normalizedCity = useMemo(() => convertSpecialCharacters(city), [city]);
  const { data, isLoading } = Weather.useLocation(normalizedCity);

  return (
    <PageContentContainer data-testid={CityPageTestIds.Container}>
      <CityNameWidget loading={isLoading} cityName={data !== undefined ? data.location.name : undefined} />
      <WidgetWrapper data={data} isLoading={isLoading} data-testid={CityPageTestIds.Widgets} />
      <NearestCitiesWeatherWidget loading={true} cityName={data !== undefined ? data.location.name : undefined} />
    </PageContentContainer>
  );
};

export { CityPage };

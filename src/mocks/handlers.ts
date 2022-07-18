import { rest } from 'msw';
import { weatherSuccessResponse, cities } from './mockData';

const currentWeatherApiUrl = process.env.REACT_APP_WEATHER_API_URL + '/current.json';
const searchCitiesApiUrl = process.env.REACT_APP_WEATHER_API_URL + '/search.json';

const handlers = [
  rest.get(currentWeatherApiUrl, (req, res, ctx) => {
    const q = req.url.searchParams.get('q');

    const isEmptyQuery = q === '';
    const isNotMatchingQuery = q === 'xyz';

    if (isEmptyQuery) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1003,
          message: 'Parameter "q" not provided.',
        }),
        ctx.delay(500),
      );
    }
    if (isNotMatchingQuery) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1006,
          message: 'No location found matching parameter "q".',
        }),
        ctx.delay(500),
      );
    }
    return res(ctx.status(200), ctx.json(weatherSuccessResponse), ctx.delay(500));
  }),
  rest.get(searchCitiesApiUrl, (req, res, ctx) => {
    const q = req.url.searchParams.get('q');

    const isEmptyQuery = q === '';

    if (isEmptyQuery) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1003,
          message: 'Parameter q is missing.',
        }),
        ctx.delay(500),
      );
    }
    return res(ctx.status(200), ctx.json(cities), ctx.delay(100));
  }),
];

export { handlers };

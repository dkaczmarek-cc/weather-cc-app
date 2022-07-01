import { rest } from 'msw';
import { dummyResponse } from './mockData';

const currentWeatherApiUrl = process.env.REACT_APP_WEATHER_API_URL + '/current.json';

const handlers = [
  rest.get(currentWeatherApiUrl, (req, res, ctx) => {
    const key = req.url.searchParams.get('key');
    const q = req.url.searchParams.get('q');

    const isAuhtenticated = key === process.env.REACT_APP_WEATHER_API_KEY;
    const isKeyProvided = key !== '';
    const isBadRequest = q === '';
    const isResultNotFound = q === 'xyz';

    if (!isKeyProvided) {
      return res(
        ctx.status(401),
        ctx.json({
          code: 1002,
          message: 'API key not provided.',
        }),
      );
    }
    if (!isAuhtenticated) {
      return res(
        ctx.status(401),
        ctx.json({
          code: 2006,
          message: 'API key provided is invalid',
        }),
      );
    }
    if (isBadRequest) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1003,
          message: 'Parameter "q" not provided.',
        }),
      );
    }
    if (!isResultNotFound) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1006,
          message: 'No location found matching parameter "q"',
        }),
      );
    }
    return res(ctx.status(200), ctx.json(dummyResponse));
  }),
];

export { handlers };

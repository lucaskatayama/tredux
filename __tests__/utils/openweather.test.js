import { expect } from 'chai';
import * as ow from 'utils/openweather';
import nock from 'nock';
import json from './ow.json';

describe('OpenWeather API', () => {
  it('should translate correctly', async () => {
    nock(ow.root).get('/weather').query(true).reply(200, json);
    await ow.get('weather', { q: 'Campinas' }).then((data) => {
      expect(data).to.have.all.keys([
        'description',
        'icon',
        'country',
        'temp',
        'temp_max',
        'temp_min',
        'pressure',
        'humidity',
        'name',
        'id',
      ]);
    });
  });
});

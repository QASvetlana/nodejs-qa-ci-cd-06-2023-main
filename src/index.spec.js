import supertest from "supertest";

import server from './index.js'
import config from './config.js';

describe('GET /hello/:name', () => {
  beforeEach(() => {
    server.start()
  })

  afterEach(() => {
    server.stop()
  });

  test('Should return welcome string', async () => {
    const res = await supertest(config.url)
      .get('/hello/nik')
      .set('Accept', 'application/json');

    expect(res.body).toEqual({ msg: 'Hello my nik from express version 4' })
  });

  test('Should return welcome string 2', async () => {
    const res = await supertest(config.url)
      .get('/hello/bad-user')
      .set('Accept', 'application/json');

    expect(res.body).toEqual({ msg: 'Hello my bad-user from express version 4' })
  });

  test('Should return welcome string 3', async () => {
    const res = await supertest(config.url)
      .get('/hello/100200')
      .set('Accept', 'application/json');

    expect(res.body).toEqual({ msg: 'Hello my 100200 from express version 4' })
  });
});

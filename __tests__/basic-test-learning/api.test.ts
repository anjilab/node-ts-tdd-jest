import request from 'supertest';
import app from '../../src/app';

describe('Get /api/v1/household', () => {
  test('It should respond with text OK', async () => {
    const response = await request(app).get('/api/v1/household');
    expect(response.body.code).toEqual(200);
  });
});

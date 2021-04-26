/* eslint-disable no-undef */
const { get, getAsync } = require('../main/get');
const ditto = require('../resources/ditto.json');

describe('testing me gets', () => {
  beforeAll(() => {
    console.log('START:');
  });

  beforeEach(() => {
    console.log('NEW TEST:');
  });

  test('ditto ditto', (done) => {
    const promise = get();
    promise.then((res) => res.json())
      .then((json) => {
        expect(json).toEqual(ditto);
        done();
      }).catch((err) => done(err));
  });

  test('ditto ditto async', async () => {
    const result = await getAsync();

    expect(result).toEqual(ditto);
  });

  afterEach(() => {
    console.log('TEST DONE');
  });

  afterAll(() => {
    console.log('ALL DONE');
  });
});

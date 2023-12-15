import GameSavingLoader from '../app';

jest.setTimeout(15000);

describe('GameSavingLoader', () => {
  test('should load game saving data successfully', async () => {
    const saving = await GameSavingLoader.load();

    expect(saving).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
  }, 10000);

  test('should catch err', async () => {
    GameSavingLoader.load = jest.fn().mockRejectedValue(new Error('Test error'));
    try {
      await GameSavingLoader.load();
    } catch (error) {
      expect(error.message).toBe('Test error');
    }
  }, 10000);
});

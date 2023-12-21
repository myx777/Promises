import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((jsonData) => JSON.parse(jsonData))
      .catch((error) => {
        console.error('Error loading game saving:', error);
        throw error; // пробросим ошибку, чтобы её можно было обработать во внешнем коде, если нужно
      });
  }
}

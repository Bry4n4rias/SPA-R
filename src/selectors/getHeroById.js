const { heroes } = require('../data/heroes');

export const getHeroById = (id) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  return heroes.find((heroe) => heroe.id === id);
};

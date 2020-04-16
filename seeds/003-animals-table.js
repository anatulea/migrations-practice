
exports.seed = function(knex) {
  return knex('animals').truncate()
    .then(function () {
      return knex('animals').insert([
        {farm_id: 1, 'animal-name': 'Chicken', 'animal-type':'eggs' },
        {farm_id: 1, 'animal-name': 'Sheep', 'animal-type':'milk' },
        {farm_id: 3, 'animal-name': 'Horse', 'animal-type':'transportation' },
        {farm_id: 3, 'animal-name': 'pig', 'animal-type':'meat' },
        {farm_id: 2, 'animal-name': 'goat', 'animal-type':'milk' },
        {farm_id: 2, 'animal-name': 'rabbit', 'animal-type':'meat' },
        {farm_id: 2, 'animal-name': 'horse', 'animal-type':'transportation' }
      ]);
    });
};

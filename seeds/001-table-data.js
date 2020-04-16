
exports.seed = function(knex) {
  return knex('farms').truncate()
    .then(function () {
      return knex('farms').insert([
        {'farm-name': 'Beech Ranch'},
        {'farm-name': 'Morton Farms'},
        {'farm-name': 'Willow Way'}
      ]);
    });
};

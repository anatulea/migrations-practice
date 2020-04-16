
exports.seed = function(knex) {
  return knex('ranchers').truncate()
    .then(function () {
      return knex('ranchers').insert([
        {farm_id: 1, 'rancher-name': 'John Doe'},
        {farm_id: 1, 'rancher-name': 'Jane Doe'},
        {farm_id: 3, 'rancher-name': 'Jim Done'},
        {farm_id: 3, 'rancher-name': 'Helen Done'},
        {farm_id: 2, 'rancher-name': 'Jay Dow'},
        {farm_id: 2, 'rancher-name': 'Jen Dunn'},
        {farm_id: 2, 'rancher-name': 'Juan Rodriguez'}
      ]);
    });
};

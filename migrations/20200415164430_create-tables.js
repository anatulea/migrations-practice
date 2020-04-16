
exports.up = function(knex) {
  // 1 farm has many ranchers 
  // farm table == one table  ranchers table== many table
  // the ranchers table refers to the farm table so farm needs to be created forst
  return knex.schema.createTable('farms', tbl => {
      tbl.increments();
      tbl.string('farm-name', 128).notNullable();
  })
  .createTable('ranchers', tbl => {
    tbl.increments();
    tbl.string('rancher-name', 128).notNullable();
    //foreign key that points to the farms table
    tbl.integer('farm_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('farms')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');;
  })
};

exports.down = function(knex) {
    return knex.schema
    //drop tables in the oposite order of their creation
    .dropTableIfExists('ranchers')
    .dropTableIfExists('farms');
};

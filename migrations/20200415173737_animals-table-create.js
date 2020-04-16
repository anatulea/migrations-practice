
exports.up = function(knex) {
    return knex.schema.createTable('animals', tbl => {
        tbl.increments();
        tbl.string('animal-name', 128).unique().notNullable();
        tbl.string('animal-type', 128).notNullable();
        tbl.integer('farm_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('farms')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');;
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('animals')
};

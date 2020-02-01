exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id');
      table
        .string('email')
        .notNullable()
        .index();
      table.string('password').notNullable();
      table.string('phone_number');
      table.timestamps(true);
    })
    .createTable('events', table => {
      table.increments('id');
      table
        .string('type')
        .unique()
        .notNullable()
        .index();
      table.integer('user_id').unsigned();
      table.timestamps(true);
    });
};

exports.down = function(knex) {
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users').dropTableIfExists('events');
  };
};

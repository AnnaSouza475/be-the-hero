// metodo para executar a migrations//
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable(); // o numero 2 depois da virgula faz com que ele se limite apenas a dois caracteres//

  });
};
// se der ruim// // metodo que deleta//
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

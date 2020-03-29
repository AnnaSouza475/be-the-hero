const express = require ('express');
const cors = require('cors'); 
const routes = require('./routes'); //usa-se 0 ./ quando estiver na msm pasta// // ../ volta uma pasta//
//const= variavel//
const app = express();
app.use(cors());
app.use(express.json());// use função de dentro da variavel//
app.use(routes);
//rota / recurso//    
/**
 * Metodo HTTP
 * GET: Buscar uma informação no bac-end
 * POST: Criar e enviar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end */ 
/**
 * Tipos de parametros:
 * Query: parametros nomeados enviados na rota apos o simbolo de interogação e serve para filtros, paginação
 * Route Params: parametros ultilizado para identificar recursos(/:id)
 * Request Body: corpo da requisição, ultilizado para criar ou alterar recursos
 */
/**
 * Banco de dados
 * SQL  : MySQL, SQLite, PostgreSQL, Microsoft SQL Server, Oracle (relacional,as coisas se comunica'tabelas,campos')
 * NoSQL: MongoDB, CouchDB,etc (não possui relações)
 */
/**
 * Drive: SELECT * FROM users (selecionar todos os usuarios)
 * Query Builder: table('users').select('*').where() - onde(condição)
 */



app.listen(3333);

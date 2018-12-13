'use strict';

const Pool = require('pg-pool');
const config = require('../config.json');
const { table, host, database, user, password, port } = config;
const pool = new Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});


module.exports.putStudent = (event, context, callback) => {
  console.log('event.body', event.body);
  const {id, name, grade} = event.body  
  const putStudent = `UPDATE ${table} SET name  $1, grade $2 WHERE id = $3;`
  console.log('name', name);
  pool.connect()
    .then(client => {
      client.release();
      return client.query(putStudent, [name, grade, id]);
    })
    .then(data => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
          message: data,
        }),
      };
      callback(null, response);
    })
    .catch(e => {
      console.log('error', e)
      const response = {
          "statusCode": 500,
          "body": JSON.stringify(e)
      }
      callback(null, response);
  });
};

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };


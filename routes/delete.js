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


module.exports.deleteStudent = (event, context, callback) => {
  const {id} = event.body  
  const deleteStudent = `DELETE FROM ${table} WHERE id = $1;`;
  pool.connect()
    .then(client => {
      client.release();
      return client.query(deleteStudent, [id]);
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

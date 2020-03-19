const Pool = require('pg').Pool
const pool = new Pool({
    user : 'postgres',
    host: 'localhost',
    database: 'questans',
    password : 'ajmal98',
    port: 5432,
})

const getId = (request,response) => {
pool.query('SELECT id FROM questions',(error,results) => {
   if(error) {
     throw error ;
     }
   response.status(200).json(results.rows)
   })
 }

const getQuesttext = (request,response) => {
pool.query('SELECT quest_text FROM questions',(error,results) => {
    if(error) {
      throw error ;
       }
    response.status(200).json(results.rows)
  })
 }

module.exports = {
  getId,
  getQuesttext
}

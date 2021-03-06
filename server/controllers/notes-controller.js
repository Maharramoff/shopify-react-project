// Import database
const knex = require('./../db')

// Retrieve all notes
exports.notesAll = async (req, res) => {
    // Get all notes from database
    knex
      .select('*') // select all records
      .from('notes') // from 'notes' table
      .then(userData => {
          // Send notes extracted from database in response
          res.json(userData)
      })
      .catch(err => {
          // Send a error message in response
          res.json({ message: `There was an error retrieving notes: ${err}` })
      })
}
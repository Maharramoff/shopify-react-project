// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

// Create a table in the database called "notes"
knex.schema
  // Make sure no "notes" table exists
  // before trying to create new
  .hasTable('notes')
  .then((exists) => {
      if (!exists) {
          // If no "notes" table exists
          // create new, with "id", "author", "title",
          // "pubDate" and "rating" columns
          // and use "id" as a primary identification
          // and increment "id" with every new record (note)
          return knex.schema.createTable('notes', (table)  => {
              table.increments('id').primary()
              table.string('author')
              table.string('title')
              table.string('body')
              table.string('pubDate')
          })
            .then(() => {
                // Log success message
                console.log('Table \'Notes\' created')
            })
            .catch((error) => {
                console.error(`There was an error creating table: ${error}`)
            })
      }
  })
  .then(() => {
      // Log success message
      console.log('done')
  })
  .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
  })

// Export the database
module.exports = knex
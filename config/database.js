
const parse = require('pg-connection-string').parse;


// const config = parse(dbUrl);
// DATABASE_URL is set in .env to whatever database heroku assigned to us
// when that changes, execute
// heroku config:get DATABASE_URL -a mwcontent
// and copy result into .env
// (at the moment node.js does not support "command substitution" in dotenv)

const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        },
      },
      debug: false,
    },
  });

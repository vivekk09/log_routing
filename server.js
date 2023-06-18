const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'user1',
  password: 'password',
  host: 'database',
  port: 5432,
  database: 'log_db',
});

app.use(express.json());

app.post('/log', (req, res) => {
  const logData = req.body;

  // Write the log data to the database
  pool.query(
    'INSERT INTO logs (id, unix_ts, user_id, event_name) VALUES ($1, $2, $3, $4)',
    [logData.id, logData.unix_ts, logData.user_id, logData.event_name],
    (error, result) => {
      if (error) {
        console.error('Error inserting log data:', error);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Log routing service listening at http://localhost:${port}`);
});

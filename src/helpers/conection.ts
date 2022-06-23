// get the client
import mySql from 'mysql2/promise';

// Create the connection pool. The pool-specific settings are the defaults
const connection = mySql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'StoreManager',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  password: '1234',
});

export default connection;

const mariadb = require('mariadb');

// Create a connection pool
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mickey2025!',
    database: 'chat',
    connectionLimit: 5,
    trace: true
})

// Function to test connection
async function connectToDatabase() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Connected to MariaDB!");

    // Run a test query
    const rows = await conn.query("SELECT * FROM tbluser;");
    console.log(rows);

  } catch (err) {
    console.error("Database connection error:", err);
  } finally {
    if (conn) conn.end(); // Always close the connection
  }
}

// Call the function
connectToDatabase();

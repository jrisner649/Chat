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

async function test(){
  console.log("I'm working!")
}

// Function to test connection
async function usernameTaken(username) {
  let valid = false;
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Connected to MariaDB!");

    // Run a test query
    const rows = await conn.query(`SELECT Username FROM tblUser WHERE Username = ${username};`);
    if (rows.length > 0){
      valid = true
    }
    
  } catch (err) {
    console.error("Database connection error:", err);
  } finally {
    if (conn) conn.end(); // Always close the connection
    return valid
  }
}

async function createUser(username) {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Connected to MariaDB!");

    // Run a test query
    const rows = await conn.query(`INSERT INTO tblUser (Username) VALUES (${username});`);
    console.log(rows);

  } catch (err) {
    console.error("Database connection error:", err);
  } finally {
    if (conn) conn.end(); // Always close the connection
  }
}

// Export function for use in another file
// module.exports = { test };
module.exports = { usernameTaken };
module.exports = { createUser };



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
  let notTaken = false;
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Connected to MariaDB!");

    // Run a test query
    conn.query(`SELECT Username FROM tblUser WHERE Username = "${username}";`)
    .then(rows => {
        console.log('Ran query, retrived ', rows);
        if (rows.length = 0){
          notTaken = true
        }
    })
    
    
  } catch (err) {
    console.error("Database connection error:", err);
  } finally {
    if (conn) conn.end(); // Always close the connection
    return notTaken
  }
}

async function createUser(username) {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Connected to MariaDB!");

    // Run a test query
    const rows = await conn.query(`INSERT INTO tblUser (Username) VALUES ("${username}");`);
    console.log(rows);

  } catch (err) {
    console.error("Database connection error:", err);
  } finally {
    if (conn) conn.end(); // Always close the connection
  }
}

// Export multiple functions
module.exports = {
  test,
  usernameTaken,
  createUser
};


const express = require("express");
const mysql =require('mysql2/promise')
const app = express();
app.use(express.json())
app.get("/", function(req, res) {
    return res.send("Hello World");
});

  const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
    waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
app.get("/customers", async (req, res) => {
  try{
    const [result]=await pool.query('SELECT * from users');
    res.json(result);
  }
  catch(err){
res.status(500).json({ error: err.message });
  }
})
app.post("/createuser", async(req,res)=>{
      const {firstname,lastname,salary, email} = req.body;
  try{
const [result]=await pool.query( "INSERT INTO users (firstname, lastname, salary, email) VALUES (?, ?,?,?)",[firstname, lastname, salary, email]);
res.json({message:"data created succesfully"});
  }
  catch(err){
res.json({err:"error while creating data"});
  }
})
app.get(`/getcustomerbyid/:id`, async (req, res) => {
  const{id}=req.params;
  try{
    const [result]=await pool.query(`SELECT firstname, lastname, salary, email from users where id=${id}`);
    res.json({message:"Connected to db", result});
  }
  catch(err){
res.status(500).json({ error: err.message });
  }
})
app.delete("/deleteuser/:id", async (req, res) => {
  const{id}=req.params;
  try{
       const [results]=await pool.query(`SELECT firstname, lastname, salary, email from users where id=${id}`);
          if(results.length===0){
            res.json(`no user with id ${id}`);
    }
    else{
          const [result]=await pool.query(`DELETE FROM users WHERE id=${id}`);
           res.json(`user with id: ${id} has been deleted`);
    }

  }
  catch(err){
res.status(500).json({ error: err.message });
  }
})
app.listen(3008, ()=>{
    console.log('Listening on port 3008');
});
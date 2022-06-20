const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: 'localhost', // O host do banco. Ex: localhos t
  user: 'root', // Um usuário do banco. Ex: user 
  password: '', // A senha do usuário. Ex: user123
  database: 'posts' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

app.post("/createPost", (req, res) => {
  const { image } = req.body;
  const { description } = req.body;

  let sql = "INSERT INTO post(description, image) VALUES (?, ?)";

  con.query(sql, [description, image], (err, result) => {
    console.log(err);
  })
})

app.get("/getPosts", (req, res) => {
  const sql = "SELECT * FROM post";
  con.query(sql, (err, result) => {
    res.send(result);
  });
})

app.listen(3333, () => {
  console.log('servidor rodando na porta 3333')
})
const express = require('express');
const app = express();

app.get("/", function(req,res){
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req,res){
  res.sendFile(__dirname + "/html/index1.html");
});

app.get("/cad", function(req,res){
  res.sendFile(__dirname + "/html/index2.html");
});

app.get("/ola/:nome/:cargo", function(req,res){
  res.send("Olá " + req.params.nome + " você é um(a) ótimo(a) " + req.params.cargo + "! Agora acesse a rota localhost:8080/cad");
});

app.listen(8080, function(){
  console.log("Servidor ativo em localhost:8080")
});

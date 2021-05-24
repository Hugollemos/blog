const mongoose = require("mongoose");

function connectDataBase() {
  mongoose.connect(process.env.DATABSE_URL,{
    useNewUrlParser: true, 
    userUnifiedTopology: true,
    
  });

  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("CONECTADO AO BANCO DE DADOS!"));
}

module.exports = connectDataBase;
//requerindo sequelize 
const Sequelize = require('sequelize'); 
//instancia de conexaão ao banco de dados 
const sequelize = new Sequelize('db_neverloss','sa','P1g4-7x3f-si2a',{
    host:"NOTE-PEDROHENRI", 
    dialect:'mssql',
    port: "1433"    //Essa porta pode manter e ser diferente da porta do servidor do Web Service, pois essa porta remete apenas ao servidor
})

sequelize.authenticate().then(function(){
    console.log("conexão estabelecida!")
}).catch(function(erro){
    console.log("conexão falha! "+erro);
});



module.exports = sequelize;
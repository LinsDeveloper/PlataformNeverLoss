const sql = require('mssql/msnodesqlv8');

// database configuration

var config = {
    database: 'db_neverloss', //my database here
    server:   'DESKTOP-NI69CE7\SQLSERVER',   //Server name
    driver: 'msnodesqlv8',
    options:{
        trustedConnection: true
    }
};


// connect to database


sql.connect(config, function(err){
    if(err){
        console.log(err);
    }

    //create the request object

    var request = new sql.request();
    //execute procedure
    request.execute('BuscarUsuario', (err, recordset) => {
        if(err)
           return console.log(err);
    
        console.log(recordset);
    });

})
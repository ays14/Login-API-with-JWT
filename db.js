var mysql = require('mysql');
var pool = null;
exports.connect = function() {
    pool = mysql.createPool({
        host    : 'localhost',
        port    : 3306,
        user    : 'root',
        password    : '@143_mysql',
        database    : 'sv_t1'
    });
}

exports.get = function(){
    return pool;
}
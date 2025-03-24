const mysql=require('mysql2/promise')

const mysqlPool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'kulsoommysql',
    database:'localMarket'
})

module.exports=mysqlPool
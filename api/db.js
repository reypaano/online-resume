import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "resume_db",
    dateStrings: 'date'
})



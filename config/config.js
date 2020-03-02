require('dotenv').config();

module.exports = {
    "development": {
        "username": 'admin',
        "password": '71387138',
        "database": 'DB_PazHUB',
        "host": 'monolitico.cieal6lqmbdk.us-east-2.rds.amazonaws.com',
        "dialect": "mysql"
    },
    "test": {
        "username": "admin",
        "password": '71387138',
        "database": "DB_PazHUB",
        "host": "monolitico.cieal6lqmbdk.us-east-2.rds.amazonaws.com",
        "dialect": "mysql"
    },
    "production": {
        "username": "admin",
        "password": '71387138',
        "database": "DB_PazHUB",
        "host": "monolitico.cieal6lqmbdk.us-east-2.rds.amazonaws.com",
        "dialect": "mysql"
    }
};
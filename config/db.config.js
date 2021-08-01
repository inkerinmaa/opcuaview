const dbConfig = {
    host: 'host',
    user: 'user',
    password: 'password',
    database: 'db',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

export default dbConfig

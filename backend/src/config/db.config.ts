"use strict";
import {Sequelize} from "sequelize";
import cls from "cls-hooked";

// config auto-commit transactional
const namespace = cls.createNamespace('shiki-namespace');
Sequelize.useCLS(namespace);

function createEntityManager() {
    const sequelize: Sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWD,
        {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            dialect: "mariadb",
            pool: {
                max: 500,
                min: 10,
                acquire: 30000,
                idle: 10000
            },
            dialectOptions: {
                charset: 'utf8mb4',
            }
        });

        // const sequelize: Sequelize = new Sequelize(
        //     "shiki_blogs",
        //     "test",
        //     "1234",
        //     {
        //         host: "localhost",
        //         port: 3306,
        //         dialect: "mariadb",
        //                  pool: {
        //         max: 500,
        //         min: 10,
        //         acquire: 30000,
        //         idle: 10000
        //     },
        //     dialectOptions: {
        //         charset: 'utf8mb4',
        //     }
        // });
    try {
        (async () => await sequelize.authenticate())();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw new Error('Unable to connect to the database:');
    }
    return sequelize;
}

let entityManager: Sequelize =  createEntityManager();


export default async function getEntityManager(): Promise<Sequelize> {
    if (!entityManager)
        entityManager = createEntityManager();
    return entityManager;
};

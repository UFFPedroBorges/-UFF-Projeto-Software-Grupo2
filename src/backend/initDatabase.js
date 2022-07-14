import {Sequelize } from 'sequelize';


export const initDatabase = async () => {
    const sequelize = new Sequelize('postgres', 'root', 'ewqewq321', {
        host: 'localhost',
        dialect: 'postgres'
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    return sequelize;
}
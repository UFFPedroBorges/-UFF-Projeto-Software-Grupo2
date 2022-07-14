import {Sequelize } from 'sequelize';

var sequelize = undefined;

export const initDatabase = async () => {
    if (!sequelize) {
        sequelize = new Sequelize('postgres', 'root', 'ewqewq321', {
            host: 'localhost',
            dialect: 'postgres'
        });
    
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    return sequelize;
}
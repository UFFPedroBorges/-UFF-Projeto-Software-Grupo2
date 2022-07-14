import { DataTypes } from 'sequelize';

export const createModel = (sequelize) => {
    const userModel = sequelize.define('User', {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {
        tableName: "users",
        timestamps: false
      }
      );
    
    return userModel;
}

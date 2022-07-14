import { DataTypes } from 'sequelize';

export const createModel = (sequelize) => {
    const productModel = sequelize.define('Product', {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        amount: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }
      );
    
    return productModel;
}

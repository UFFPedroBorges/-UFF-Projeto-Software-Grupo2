import { createModel } from './infrastructure/model.js';
import { ProductRepository } from './infrastructure/repository.js';
import { ProductManager } from './application/manager.js';



export const createProductComponent = ({sequelize}) => {
    const productModel = createModel(sequelize)
    const productRepository = new ProductRepository({productModel})
    const productManager = new ProductManager({productRepository})

    return {
        ...productManager
    }
}
   
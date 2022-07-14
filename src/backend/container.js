import { initDatabase } from './initDatabase.js';
import { createUserComponent } from './contexts/user/index.js';
import { createProductComponent } from './contexts/product/index.js';

export const createContainer = async () => {
    
    const sequelize = await initDatabase();
    const userComponent = createUserComponent({sequelize})
    const productComponent = createProductComponent({sequelize})
    const session = { user: undefined }

    return {
        sequelize,
        session,
        userComponent,   
        productComponent
    }
}
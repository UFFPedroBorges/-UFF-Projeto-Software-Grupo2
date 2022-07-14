import { createModel } from './infrastructure/model.js';
import { UserRepository } from './infrastructure/repository.js';
import { UserManager } from './application/manager.js';
import { bindMethods } from '../../helpers.js';



export const createUserComponent = ({sequelize}) => {
    const userModel = createModel(sequelize)
    const userRepository = new UserRepository({userModel})
    const userManager = new UserManager({userRepository})
    console.log('userManager', userManager)
    return {
        ...bindMethods(userManager, ['createUser', 'findUserById', 'login'])
    }
}
   
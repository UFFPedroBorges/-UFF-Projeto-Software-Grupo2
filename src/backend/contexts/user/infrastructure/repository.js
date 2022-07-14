export class UserRepository {
    constructor({
        userModel,
    }) {
        this.userModel = userModel;
    }

    async create(data) {
        const user = await this.userModel.create({...data}) 
        return user.toJSON()
    }

    async findById(id) {
        const user = await this.userModel.findOne({ where: {id} });
        return user ? user.toJSON() : null;
    }

    async findByEmail(email) {
        const user = await this.userModel.findOne({ where: {email} });
        return user ? user.toJSON() : null;
    }

}
export class ProductRepository {
    constructor({
        productModel,
    }) {
        this.productModel = productModel;
    }

    async create(data) {
        const product = this.productModel.create({...data}) 
        return product.toJSON()
    }

    async findById(id) {
        const product = this.productModel.findOne({ where: {id} });
        return product ? product.toJSON() : null;
    }

    async findByName(name) {
        const product = this.productModel.findOne({ where: {name} });
        return product ? product.toJSON() : null;
    }

}
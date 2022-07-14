export class ProductManager {
    constructor({
        productRepository,
    }) {
        this.productRepository = productRepository;
    }
    
    async createProduct(data) {
        return this.productRepository.create(data)
    }

    async findProductById(id) {
        return this.productRepository.findProductById(id)
    }
}
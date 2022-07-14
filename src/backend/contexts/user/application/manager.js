export class UserManager {
    constructor({
        userRepository,
    }) {
        this.userRepository = userRepository;
    }
    
    async createUser(data) {
        return this.userRepository.create(data)
    }

    async findUserById(id) {
        return this.userRepository.findUserById(id)
    }

    async login(email, password, session) {
        const userToLogin = await this.userRepository.findByEmail(email);
        if( userToLogin && userToLogin.password === password) {
            session.user = userToLogin
            return user
        }
        return null;
    }
}
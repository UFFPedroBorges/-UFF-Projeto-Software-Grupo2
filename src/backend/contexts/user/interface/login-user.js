import { httpVerbs } from '../../../constants.js'

export const loginUserRoute = {
    path: '/api/user/login',
    verb: httpVerbs.post,
    action: async({session, res, req, userComponent}) => {
        const { email, password } = req.body
        console.log('req.body', req.body)
        const loggedUser = await userComponent.login(email, password, session)
        
        if (loggedUser){
            return res.redirect('/product/cadastro');
        }
        return res.sendStatus(400);
    }
}


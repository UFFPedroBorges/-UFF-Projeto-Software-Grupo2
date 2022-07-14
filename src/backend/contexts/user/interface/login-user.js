import { httpVerbs, httpCodes } from '../../../constants.js'

export const loginUserRoute = {
    path: '/api/user/login',
    verb: httpVerbs.post,
    action: async({session, res, req, userComponent}) => {
        const { email, password } = req.body
        const loggedUser = await userComponent.login(email, password, session)
        
        if (loggedUser){
            return res.sendStatus(httpCodes.success);
        }
        return res.sendStatus(httpCodes.badRequest);
    }
}


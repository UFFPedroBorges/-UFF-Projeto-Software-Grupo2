import { httpVerbs } from '../../../constants.js'

export const logoffUserRoute = {
    path: '/api/user/logoff',
    verb: httpVerbs.get,
    action: async({session, res}) => {
        session.user = undefined
        res.redirect('/user/login');
    }
}
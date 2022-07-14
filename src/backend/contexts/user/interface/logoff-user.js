import { httpVerbs } from '../../../constants.js'

export const logoffUserRoute = {
    path: '/api/user/logoff',
    verb: httpVerbs.get,
    action: async({session}) => {
        session.user = undefined
        return res.sendStatus(httpCodes.success);
    }
}
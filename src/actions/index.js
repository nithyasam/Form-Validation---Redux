import constants from '../constants'

export default {
    createUser: (user) => {
        return {
            type: constants.USER_CREATED,
            data: user
        }
    }
}
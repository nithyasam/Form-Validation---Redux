import constants from '../constants'

var initialState = {
    all: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch(action.type) {
        case constants.USER_CREATED:
            console.log(JSON.stringify(action.data))
            let all = Object.assign([], newState.all)
            all.push(action.data)
            newState['all'] = all
            return newState
        default:
            return state
    }
}
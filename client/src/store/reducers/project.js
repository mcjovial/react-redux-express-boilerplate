import {GET_PROJECTS} from '../actions/constants'

const projectReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_PROJECTS:
        return payload
      default:
        return state
    }
}

export default projectReducer;

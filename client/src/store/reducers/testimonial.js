import { GET_TESTIMONIAL } from "../actions/constants";

const testimonialReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_TESTIMONIAL:
        return payload
      default:
        return state
    }
}

export default testimonialReducer;

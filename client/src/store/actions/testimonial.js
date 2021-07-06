import { GET_TESTIMONIAL } from "./constants"

export const getTestimonial = () => dispatch => {
  return fetch('/api/testimonial')
    .then(res => res.json())
    .then(testimonial => dispatch({
      type: GET_TESTIMONIAL, 
      payload: testimonial
    }))
}

import {combineReducers} from 'redux';
import projectReducer from './project';
import testimonialReducer from './testimonial';

export default combineReducers({
  projects: projectReducer,
  testimonial: testimonialReducer
});

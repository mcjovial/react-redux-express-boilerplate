import {GET_PROJECTS} from './constants';

export const getProjects = () => dispatch => {
  return fetch('/api/projects')
    .then(res => res.json())
    .then(projects => dispatch({
      type: GET_PROJECTS, 
      payload: projects
    }))
}

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getProjects} from '../../store/actions/project'
import './projects.css';

class Projects extends Component {

  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired
  }

  static defaultProps = {
    projects: []
  }

  componentWillMount() {
    this.props.getProjects();
  }

  render() {

    return (
      <div>
        <h2>Projects</h2>
        <ul>
        {this.props.projects.map(project =>
          <li key={project.id}>{project.client} | {project.title}</li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

const dispatchToProps = (dispatch) => ({
   getProjects: () => dispatch(getProjects())
})

export default connect(mapStateToProps, dispatchToProps)(Projects);

import React, { Component } from 'react';

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <p>Course 1: {this.props.course1}</p>
        <p>Course 2: {this.props.course2}</p>
        <div>
          <h2>Additional Information:</h2>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ClassProps;

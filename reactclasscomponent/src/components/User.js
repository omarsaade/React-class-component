import classes from './User.module.css'
import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <li className={classes.user}>{this.props.name}</li>
    )
  }
}

export default User
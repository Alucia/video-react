import React, { Component } from 'react';
import RegularError from '../components/regular-error'

class HandleError extends Component {
  state = {
    handleError: false,
  }
  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    })
    //envia este error a un servicio como Sentry
  }
  render() {
    if(this.state.handleError) {
      return (
        <p>ha ocurrido un error</p>
      )
    }
    return this.props.children
  }
}

export default HandleError;
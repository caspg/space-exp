import React, { Component, cloneElement, PropTypes } from 'react'

import AppView from 'components/AppView'

class AppContainer extends Component {
  constructor(props) {
    super(props)

    const { data } = this.props

    this.state = {
      apods: data ? data.apods : [],
      apodsNextDate: data ? data.apodsNextDate : '',
    }

    this.handleNewApodsData = this.handleNewApodsData.bind(this)
  }

  handleNewApodsData(apodsData) {
    const { apods } = this.state

    this.setState({
      apods: apods.concat(apodsData.apods),
      apodsNextDate: apodsData.meta.nextDate,
    })
  }

  render() {
    const props = {
      ...this.state,
      onNewApodsData: this.handleNewApodsData,
    }

    return (
      <AppView>
        {cloneElement(this.props.children, props)}
      </AppView>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
  data: PropTypes.shape({
    apods: PropTypes.arrayOf(PropTypes.object),
    apodsNextDate: PropTypes.string,
  }),
}

export default AppContainer

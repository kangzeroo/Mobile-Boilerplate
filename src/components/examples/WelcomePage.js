// Compt for copying as a template
// This compt is used for...

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import PropTypes from 'prop-types'
import Rx from 'rxjs'
import { withRouter } from 'react-router-dom'
import {
  SpeedDial,
  Fab,
  Icon,
  SpeedDialItem,
  Page,
} from 'react-onsenui'


class WelcomePage extends Component {

  renderFixed() {
    return (
      <SpeedDial position='bottom right'>
        <Fab>
          <Icon icon='md-share' />
        </Fab>
        <SpeedDialItem>
          <Icon icon='md-twitter' />
        </SpeedDialItem>
        <SpeedDialItem>
          <Icon icon='md-facebook' />
        </SpeedDialItem>
        <SpeedDialItem>
          <Icon icon='md-google-plus' />
        </SpeedDialItem>
      </SpeedDial>
    )
  }

	render() {
		return (
			<Page id='WelcomePage' renderFixed={() => this.renderFixed()} style={comStyles().container}>
				WelcomePage
			</Page>
		)
	}
}

// defines the types of variables in this.props
WelcomePage.propTypes = {
	history: PropTypes.object.isRequired,
}

// for all optional props, define a default value
WelcomePage.defaultProps = {

}

// Wrap the prop in Radium to allow JS styling
const RadiumHOC = Radium(WelcomePage)

// Get access to state from the Redux store
const mapReduxToProps = (redux) => {
	return {

	}
}

// Connect together the Redux store with this React component
export default withRouter(
	connect(mapReduxToProps, {

	})(RadiumHOC)
)

// ===============================

// the JS function that returns Radium JS styling
const comStyles = () => {
	return {
		container: {
      display: 'flex',
      flexDirection: 'column',
		}
	}
}

// Compt for copying as a template
// This compt is used for...

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import PropTypes from 'prop-types'
import Rx from 'rxjs'
import { withRouter } from 'react-router-dom'
import {
  Page,
  Button,
  ActionSheet,
  ActionSheetButton,
} from 'react-onsenui'


class ExampleDialog extends Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  handleClick() {
    this.setState({isOpen: true});
  }

  handleCancel() {
    this.setState({isOpen: false});
  }

	render() {
		return (
      <Page id='ExampleDialog'>
        <p style={{textAlign: 'center', paddingTop: '10px'}}>
          <Button onClick={() => this.handleClick()}>Show dialog</Button>
        </p>

        <ActionSheet isOpen={this.state.isOpen} animation='default'
          onCancel={() => this.handleCancel()}
          isCancelable={true}
          title={'Description'}
        >
          <ActionSheetButton onClick={() => this.handleCancel()}>Label1</ActionSheetButton>
          <ActionSheetButton onClick={() => this.handleCancel()}>Label2</ActionSheetButton>
          <ActionSheetButton onClick={() => this.handleCancel()} modifier={'destructive'}>Label3</ActionSheetButton>
          <ActionSheetButton onClick={() => this.handleCancel()} icon={'md-close'}>Cancel</ActionSheetButton>
        </ActionSheet>
      </Page>
		)
	}
}

// defines the types of variables in this.props
ExampleDialog.propTypes = {
	history: PropTypes.object.isRequired,
}

// for all optional props, define a default value
ExampleDialog.defaultProps = {

}

// Wrap the prop in Radium to allow JS styling
const RadiumHOC = Radium(ExampleDialog)

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

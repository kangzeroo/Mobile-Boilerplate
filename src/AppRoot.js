// Compt for copying as a template
// This compt is used for...

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import PropTypes from 'prop-types'
import Rx from 'rxjs'
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import { Splitter, SplitterSide, Toolbar, ToolbarButton, Page, List, SplitterContent, ListItem, Icon } from 'react-onsenui'

import WelcomePage from './components/examples/WelcomePage'
import ExampleCarousel from './components/examples/ExampleCarousel'
import ExampleDialog from './components/examples/ExampleDialog'

class AppRoot extends Component {

	constructor() {
		super()
		this.state = {
			isOpen: false,
		}
	}

	renderToolbar() {
    return (
      <Toolbar>
        <div className='left'>
          <ToolbarButton onClick={() => this.setState({isOpen: true})}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
        <div className='center'>RentHero</div>
      </Toolbar>
    )
  }

  clickedSidebarOption(redirect_url) {
    this.props.history.push(redirect_url)
    this.setState({isOpen: false})
  }

	renderSideBar() {
		const sidemenu_options = [
			{ id: '1', title: 'Home', redirect_url: '/' },
			{ id: '2', title: 'Carousel', redirect_url: '/carousel' },
			{ id: '3', title: 'Dialog', redirect_url: '/dialog' },
		]
		return (
			<SplitterSide
				style={{
						boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
				}}
				side='left'
				width={200}
				collapse={true}
				swipeable={true}
				isOpen={this.state.isOpen}
				onClose={() => this.setState({isOpen: false})}
				onOpen={() => this.setState({isOpen: true})}
			>
				<Page>
					<List
						dataSource={sidemenu_options}
						renderRow={(option) => (
							<ListItem key={option.id} onClick={() => this.clickedSidebarOption(option.redirect_url)} tappable>{option.title}</ListItem>
						)}
					/>
				</Page>
			</SplitterSide>
		)
	}

	renderRoutes() {
		return (
			<Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/sandbox' component={ExampleCarousel} />
        <Route exact path='/carousel' component={ExampleCarousel} />
        <Route exact path='/dialog' component={ExampleDialog} />
      </Switch>
		)
	}

	render() {
		return (
			<div id='AppRoot' style={comStyles().container}>
				<Splitter>
					{
						this.renderSideBar()
					}
					<SplitterContent>
						<Page renderToolbar={() => this.renderToolbar()}>
							{
								this.renderRoutes()
							}
						</Page>
					</SplitterContent>
				</Splitter>
			</div>
		)
	}
}

// defines the types of variables in this.props
AppRoot.propTypes = {
	history: PropTypes.object.isRequired,
}

// for all optional props, define a default value
AppRoot.defaultProps = {

}

// Wrap the prop in Radium to allow JS styling
const RadiumHOC = Radium(AppRoot)

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

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
  Carousel,
  CarouselItem,
  Toolbar,
} from 'react-onsenui'


class ExampleCarousel extends Component {

  constructor() {
    super()
    this.state = {
      items: [
        '#F1948A',
        '#D7BDE2',
        '#85C1E9',
        '#73C6B6',
      ],
      index: 0
    }
  }

  handleChange(e) {
    console.log(e)
    this.setState({ index: e.activeIndex })
  }

  setIndex(index) {
    this.setState({ index: index })
  }

	render() {
		return (
      <Page id='ExampleCarousel'>
        <Carousel onPostChange={(e) => this.handleChange(e)} index={this.state.index} fullscreen swipeable autoScroll overscrollable>
          {this.state.items.map((item, index) => (
            <CarouselItem key={index} style={{ backgroundColor: item }}>
              <div style={{ marginTop: '50%', textAlign: 'center' }}>
                Swipe me!
              </div>
              </CarouselItem>
          ))}
        </Carousel>

        <div style={{
          textAlign: 'center',
          fontSize: '20px',
          position: 'absolute',
          bottom: '36px',
          left: '0px',
          right: '0px'
        }}>
          {this.state.items.map((item, index) => (
            <span key={index} style={{ cursor: 'pointer' }} onClick={() => this.setIndex(index)}>
              {this.state.index === index ? '\u25CF' : '\u25CB'}
            </span>
          ))}
        </div>
      </Page>
		)
	}
}

// defines the types of variables in this.props
ExampleCarousel.propTypes = {
	history: PropTypes.object.isRequired,
}

// for all optional props, define a default value
ExampleCarousel.defaultProps = {

}

// Wrap the prop in Radium to allow JS styling
const RadiumHOC = Radium(ExampleCarousel)

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

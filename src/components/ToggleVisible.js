// @flow
import React from 'react'
import type {ToggleVisibleComponentProps} from '../types'
import '../styles/ToggleVisible.css'

class ToggleVisible extends React.Component {
  props: ToggleVisibleComponentProps
  
  state = {
    visible: this.props.visible,
  }

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        visible: !prevState.visible
      }
    })
  }

  render() {
    const {
      children,
      icon,
      text,
    }:ToggleVisibleComponentProps = this.props

    const {
      visible
    } = this.state
    
    return (
      <div className="toggle-visibility">
        <div>
          <button className="toggle" onClick={this.toggle}>
            {text} <img src={icon} />
          </button>
        </div>
        {visible &&
          children
        }
      </div>
    )
  }
}

export default ToggleVisible
import React from 'react'

import './ToggleVisible.css'

class ToggleVisible extends React.Component {
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
    } = this.props

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

  defaultProps = {
    visible: false,
  }

  static propTypes = {
    children: React.PropTypes.object.isRequired,
    icon: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    visible: React.PropTypes.bool.isRequired,
  }
}

export default ToggleVisible
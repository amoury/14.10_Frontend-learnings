import React from 'react'
import Switch from './switch'

class Toggle extends React.Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({ on: !this.state.on })
  }
  render() {
    const {on} = this.state
    return <Switch on={on} onClick={this.toggle} />
  }
}















function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}


export {Toggle, Usage as default}

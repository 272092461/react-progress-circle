import React, {Component} from 'react'
// import './circle.css'
import './circle.css'

class Progress extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props
    }
  }
  componentWillReceiveProps (props) {
    this.setState({
      percent: props.percent
    })
  }
  render () {
    let { percent } = this.state;
    let leftDeg = percent >= 50 ? '180deg' : (percent * 3.6 + 'deg') 
    let rightDeg = percent <= 50 ? '180deg' : (Math.min(percent * 3.6 - 180, 180) + 'deg') 
    let wrapStyle = percent > 50 ? {clip: 'auto'} : {}
    let rightStyle = {
      transform: `rotate(${rightDeg})`
    }
    if(percent <= 50) {
      rightStyle.width = 0
    }
    return (
      <div className="progress-circle-wrap">
        <div className="progress-circle" style={wrapStyle}>
          <div
            className="progress-left"
            style={{
              transform: `rotate(${leftDeg})`
            }}
          >
          </div>
          <div className="progress-right" style={rightStyle}></div>
        </div>
        <div className="progress-percent">
          { this.state.percent + '%' }
        </div>
      </div>
    );
  }
}

export default Progress
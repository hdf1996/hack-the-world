import React, { PropTypes } from "react"
import './index.css';

class CounterInfo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      counter: 60*60,
    }
  }

  componentWillReceiveProps(props){
    if (props.progress >= 1){
      this.startCounter()
    }
  }

  startCounter = () => {
    if (!this.state.timeout){
      let timeout = setInterval(this.tick, 1000)
      this.setState({timeout: timeout})
    }
  }
  
  tick = () => {
    console.log(this.state.counter)
    this.setState(prevState => ({counter: prevState.counter - 1}))
  }

  componentWillUnmount(){ clearTimeout(this.state.timeout) }

  toMinutes = (totalSeconds) => {
    let minutes = Math.floor(totalSeconds/60)
    let remainder = totalSeconds % 60
    let seconds = remainder < 10 ? '0'+remainder : remainder 
    return minutes+':'+seconds
  }

  render () {
  let { progress, hashtag} = this.props
  const happyHour = progress >=1;
  return (
    <div className={`counter-info ${happyHour && 'happy-hour'}`}>
      <div className="logo-container">
        <img className="logo-image" src="http://www.cervezapatagonia.com.ar/img/patagonia-logo.png" alt="Patagonia logo"/>
        <h1 className="logo-title">Happy Hour</h1>
      </div>
      <p className="description">
        Envia tu foto con el hashtag <span className="hashtag">{hashtag}</span> 
        para activar el Happy Hour Patagonia para este refugio por una hora.
      </p>
      {this.state.timeout ? <div className="countdown">{this.toMinutes(this.state.counter)}</div> : null}
    </div>
  )}
}

CounterInfo.propTypes = {
  progress: PropTypes.number.isRequired
};

export default CounterInfo;
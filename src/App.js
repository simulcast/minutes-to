import React from 'react'
import './style/reset.css'
import './style/styles.css'
import logo from './logo.svg'
import RoadSign from './RoadSign.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sign: {}
    }
    this.refresh = this.refresh.bind(this);
    this.fetchCaltransData = this.fetchCaltransData.bind(this);
  }

  refresh() {
    this.fetchCaltransData()
  }

  fetchCaltransData() {
    fetch('https://cwwp2.dot.ca.gov/data/d7/cms/cmsStatusD07.json')
    .then(response => response.json())
    .then(data => {
      // Dial into the data object and turn it into an array
      const rawData = Object.values(data)[0]
      const signsWithValue = this.hasMinutesToValue(rawData)
      console.log(signsWithValue)
      const randomSign = this.chooseRandomSign(signsWithValue)["cms"]
      console.log(randomSign)
      const processedRandomSign = this.processRandomSign(randomSign)
      this.setState({
        sign: processedRandomSign
      })
    })
  }

  componentDidMount() {
    this.fetchCaltransData()
  }

  hasMinutesToValue(data) {
    const signsWithValue = []
    data.forEach(signEntry => {
      const hasMessage = !!signEntry["cms"]["message"]["phase1"]["phase1Line1"]
      if (hasMessage) {
        signsWithValue.push(signEntry)
      }
    })
    return signsWithValue
  }

  chooseRandomSign(signArray) {
    const index = Math.floor(Math.random() * signArray.length)
    const randomSign = signArray[index]
    return randomSign
  }

  processRandomSign(randomSign) {
    const processedRandomSign = {
      "name" : randomSign["location"]["locationName"],
      "lat" : randomSign["location"]["latitude"], 
      "lng" : randomSign["location"]["longitude"],
      "route" : randomSign["location"]["route"],
      "direction" : randomSign["location"]["direction"],
      "place" : randomSign["location"]["nearbyPlace"],
      "line1" : randomSign["message"]["phase1"]["phase1Line1"].trim(),
      "line2" : randomSign["message"]["phase1"]["phase1Line2"].trim(),
      "line3" : randomSign["message"]["phase1"]["phase1Line3"].trim(),
      // "date" : randomSign["recordTimestamp"]["recordDate"],
      "date" : new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric'}).format(new Date().getTime()),
      "time" : new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'America/Los_Angeles'}).format(new Date().getTime())
      // "time": randomSign["recordTimestamp"]["recordTime"]
    }
    return processedRandomSign
  }


  render() {
    const { sign } = this.state
    return (
      <div className = "container">
        <div className = "logo">
          <a href = "https://tristanfriedbergrodman.com" rel="noreferrer" target="_blank">
            <img src={logo} alt="Simulcast Logo"></img>
          </a>
        </div>
        <RoadSign signData = {sign} onClick = {this.refresh}/>
      </div>
    )
  }
}

export default App
import React from 'react'
import styled from 'styled-components'
import './style/styles.css'

const RoadSignContainer = styled.div`
  background-color: black;
  border: 10px solid rgb(255, 228, 179);
  color: rgb(255, 228, 179);
  min-width: 60%;
  max-width: 90%;
  font-weight: 900;
  font-size: 7.5vmin;
  line-height: 1.75em;
  padding: 1em;
  filter: drop-shadow(15px 10px 5px orange);
  user-select: none;
  cursor: pointer;
`
const RoadSign = (props) => {
  const {signData, onClick} = props
    const googleMapsUrl = "http://maps.google.com/?cbll=" + signData.lat + "+," + signData.lng + "&cbp=12,20.09,,0,5&layer=c"
    return (
      <RoadSignContainer onClick = {onClick}>
        <div className = "message">
          <h1>{signData.line1}</h1>
          <h1>{signData.line2}</h1>
          <h1>{signData.line3}</h1>
        </div>
        <div className = "credit">
          <a href={googleMapsUrl} rel="noreferrer" target="_blank"><h3>{signData.route} {signData.direction} in {signData.place}</h3></a>
          {signData.date} at {signData.time}
        </div>
      </RoadSignContainer>
    )
}

export default RoadSign
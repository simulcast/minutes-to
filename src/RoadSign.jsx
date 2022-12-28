import React from 'react'
import styled from 'styled-components'
import './style/styles.css'

const RoadSignContainer = styled.div`
  background-color: black;
  border: 15px solid rgb(255, 228, 179);
  color: rgb(255, 228, 179);
  // min-width: 60%;
  // max-width: 85%;
  width: 65%;
  font-weight: 900;
  font-size: 7.5vmin;
  line-height: 1.75em;
  padding: 1em;
  filter: drop-shadow(15px 10px 5px orange);
  user-select: none;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    border: 10px solid rgb(255, 228, 179);
    font-size: 6vmin;
  }

`
const RoadSign = (props) => {
  const {signData, onClick} = props
    const googleMapsUrl = "http://maps.google.com/?cbll=" + signData.lat + "+," + signData.lng + "&cbp=12,20.09,,0,5&layer=c"
    return (
      <RoadSignContainer onClick = {onClick}>
        <div className = "message">
          <h1><pre>{signData.line1}</pre></h1>
          <h1><pre>{signData.line2}</pre></h1>
          <h1><pre>{signData.line3}</pre></h1>
        </div>
        <div className = "credit">
          <a href={googleMapsUrl} rel="noreferrer" target="_blank"><h3>{signData.route} {signData.direction} in {signData.place}</h3></a>
          {signData.date} at {signData.time}
        </div>
      </RoadSignContainer>
    )
}

export default RoadSign
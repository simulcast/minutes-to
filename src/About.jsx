import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

/* this class is for the about modal, which uses the reactjs-popup plug-in
its render is conditional on playState, so that it only appears after start */

const AboutPopUp = styled(Popup)`
  &-overlay {
    background-color: rgba(255, 228, 179,0.2);
  }
  &-content {
    font-family: 'Inter';
    font-size: 1.5em;
    overflow: scroll;
    padding: 40px !important;
    border: 5px solid rgb(255, 228, 179) !important;
    min-width: 80%;
    max-width: 90%;
    background-color: black;
    color: rgb(255, 228, 179);
    border: 2px black !important;
    filter: drop-shadow(15px 10px 5px orange);
    @media only screen and (max-width: 812px) {
    /* For mobile phones: */
        border: 5px solid rgb(255, 228, 179) !important;
        font-size: 0.5em;
        padding: 20px !important;
    }
  }
`
const AboutButton = styled.button`
  font-family: 'Inter';
  font-weight: 700;
  position: fixed;
  right: 0px;
  top: 0px;
  width: auto;
  height: auto;
  color: black;
  background-color: rgb(255, 228, 179);
  margin: 20px;
  font-size: 1.2em;
  border: 0px;
  cursor: pointer;
  @media only screen and (max-width: 812px) {
    /* For mobile phones: */
    top: auto;
    bottom: 0px;
    width: auto;
    height: auto;
  }
`
const About = () => {
    return (
        <AboutPopUp
        trigger={<AboutButton> about </AboutButton>}
        modal
        closeOnDocumentClick
        >
        <p>There are [] road signs across the greater Los Angeles area. </p>
        <br></br>
        <p>Design + dev by <a href="https://tristanfriedbergrodman.com" rel="noopener noreferrer" target="_blank">Tristan Friedberg Rodman</a></p>
        </AboutPopUp>
    )
}

export default About
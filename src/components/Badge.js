import React from "react"
import styled from "styled-components"

const Badge = props => (
    <Wrapper quantity={props.quantity}>
        <a href={props.href} target="_blank" rel="noopener noreferrer" >
            <Img src={props.src} />
        </a>
    </Wrapper>
)


const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  flex: 1 1 ${props => props.quantity < 5 ? 200/props.quantity : 300/props.quantity}%; 
  height: 100%;
  position: relative;
  max-width: 250px;

  @media (min-width: 768px) {
    flex: 1 1 ${props => props.quantity < 5 ? 100/props.quantity : 200/props.quantity}%; 
  }
`
const Img = styled.img`
  max-width: 200px;
`

export default Badge
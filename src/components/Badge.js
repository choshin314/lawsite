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
  flex: 1 0 ${props => props.quantity < 5 ? 100/props.quantity : 200/props.quantity}%; 
  height: 100%;
  position: relative;
  width: 250px;
`
const Img = styled.img`
  width: 100%;
`

export default Badge
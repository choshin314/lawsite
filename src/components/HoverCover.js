import React from "react"
import styled from "styled-components"

const HoverCover = (props) => (
    <Overlay hovered={props.hovered}>
        <span>{props.text}</span>
    </Overlay >
)

const Overlay = styled.div`
    position: absolute;
    top: ${props => props.hovered ? 0 : "50%"};
    bottom: ${props => props.hovered ? 0 : "50%"};
    right: ${props => props.hovered ? 0 : "50%"};
    left: ${props => props.hovered ? 0 : "50%"};
    height: ${props => props.hovered ? "100%" : 0};
    width: ${props => props.hovered ? "100%" : 0};
    background-color: rgba(0, 44, 91, .5);
    color: #3a568b;
    transition: .2s ease-in-out;
    overflow: hidden;

    & span {
        color: white;
        font-family: sans-serif;
        font-weight: 900;
        font-size: 1.5rem;
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }
    
`
export default HoverCover

// &:before {
//     content: "";
//     display: block;
//     padding-top: 100%;
//   }

//   & a {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     left: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center; */}
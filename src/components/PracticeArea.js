import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import HoverCover from "./HoverCover"
import Toggler from "./Toggler"

function PracticeArea({link, image, text}) {

    return (
        <Toggler>
            {(isHovered, setIsHovered) => (
                <Link to={link}>  
                    <Box image={image} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>             
                        <Overlay />
                        <HoverCover text={text} hovered={isHovered} />                
                        <h3>{text}</h3>
                    </Box>
                </Link>
            )}
        </Toggler>
    )
}

export default PracticeArea

const Box = styled.div`
    color: var(--white);
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: top center;
    width: 100%;
    padding-top: 75%;    
    position: relative;
    h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        white-space: nowrap;
    }
    &:hover h3 {
        display: none;
    }

`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.4);
`
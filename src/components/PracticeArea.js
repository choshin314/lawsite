import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import HoverCover from "./HoverCover"
import Toggler from "./Toggler"

const Wrapper = styled.div`
    width: 70%;
    margin: 1rem auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    position: relative;

    & a {
        text-decoration: none;
        color: inherit;
    }

    @media (min-width: 600px) {
        & {
            width: 47%;
        }
    }

    @media (min-width: 768px) {
        & {
            width: 22%
        }
    }

`
const Img = styled.img`
    border-radius: 10px;
    width: 100%;
`

function PracticeArea({link, image, text}) {

    return (
        <Toggler>
            {(isHovered, setIsHovered) => (
                <Wrapper onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <Link to={link}>                
                            <Img src={image} />
                            <HoverCover text={text} hovered={isHovered} />                
                        <h2>{text}</h2>
                    </Link>
                </Wrapper>
            )}
        </Toggler>
    )
}

export default PracticeArea
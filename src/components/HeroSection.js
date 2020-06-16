import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "gatsby"

function HeroSection(props) {
    return (
        <Section bgImage={props.bgImage}> 
            <Overlay />
            <Content>
            <Div>
                <Title>{props.title}</Title>
                <p className="font_md margin-top10">{props.description}</p>
            </Div>
            {props.buttonText && <Link to="/contact"><HeroButton><span>{props.buttonText}</span><FontAwesomeIcon icon="chevron-right" size="xs" /></HeroButton></Link>}
            </Content>
        </Section>
    )
}

export default HeroSection

const Section = styled.section`
    background-image: ${props => `radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%), url(${props.bgImage})`}; 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    margin-top: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f7f9ff;
    text-shadow: 2px 2px 4px #000000;

    @media(min-width: 768px) {
        & {
            background-attachment: fixed;
        }
    }
`
const Overlay = styled.div`
    background-color: #002c5b;
    opacity: .6;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Content = styled.div`

    padding-bottom: 2%;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 5% 5%;

    @media (min-width: 768px) {
    
            width: 80%;
            max-width: 1000px;
            padding: 2% 10%;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5em;
    line-height: 1.5;
    & p {
        font-size: 1.2em;
    }
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: var(--largeFont);
    margin-bottom: 10px;
`
const HeroButton = styled.button`
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 2px;
    font-weight: bold;
    font-size: 1.3em;
    transition: all .3s ease-in-out;
    background: transparent;
    color: var(--white);
    border: var(--white) 2px solid;

    & svg {
        height: 1.3rem;
        margin-left: -.6rem;
        
        padding-top: .125rem;
        transform: scaleX(0);
        transition: all .3s ease-in-out;
    }

    &:hover {
        border: transparent 2px solid;
        & svg {
            margin-left: .75rem;
            transform: scaleX(1);
        }
    }
`



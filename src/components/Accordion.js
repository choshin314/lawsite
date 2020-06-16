import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Toggler from "./Toggler"

function Accordion({children, light, title, bgContent, colorContent, linkColor}) {

    return (
        <Toggler>
            {(isExpanded, toggleExpanded) => (
                <Container>
                    {light ? 
                    <AccordionTitleLight onClick={() => toggleExpanded(prev => !prev)} isExpanded={isExpanded}>
                        <span>{title}</span>
                        <FontAwesomeIcon icon="angle-down" />
                    </AccordionTitleLight> 
                    :
                    <AccordionTitle onClick={() => toggleExpanded(prev => !prev)} isExpanded={isExpanded}>
                        <span>{title}</span>
                        <FontAwesomeIcon icon="angle-down" />
                    </AccordionTitle>       
                    }
                    <AccordionContent isExpanded={isExpanded} bgContent={bgContent} colorContent={colorContent}>
                        <PaddedDiv linkColor={linkColor}>
                            {children}
                        </PaddedDiv>
                    </AccordionContent>
                </Container>
            )}
        </Toggler>

    )
}

export default Accordion

const Container = styled.div`
    border-radius: 3px;
`
const AccordionTitle = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: none;
    border-radius: 3px;
    padding: .5rem 1rem;
    margin: 10px 0px;
    text-align: left;
    font-size: ${props => props.size === "large" ? "1.5em" : "1.2em"};
    font-weight: 700;  
    background-color: ${props => props.isExpanded ? "var(--dark)" : "var(--primary)"};
    color: var(--white);
    cursor: pointer;

    & svg {
        transition: all 0.4s ease-in-out;
        transform: rotate(${props => props.isExpanded ? "-180deg" : "0deg"});
        margin-left: 1em;
    }
    &:hover, &:active {
        background-color: var(--dark);
    }
    &:focus {
        outline: none;
    }

` 
const AccordionTitleLight = styled(AccordionTitle)`
    background-color: ${props => props.isExpanded ? "var(--dark)" : "var(--cream)"};
    color: ${props => props.isExpanded ? "var(--white)" : "var(--dark)"};

    &:hover, &:active {
        background-color: var(--dark);
        color: var(--white);
    }

    &:focus {
        outline: none;
    }
`

const AccordionContent = styled.div`
    max-height: ${props => props.isExpanded ? "250vh" : "0"};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background: var(--${props => props.bgContent || 'white'});
    color: var(--${props => props.colorContent || 'darkgrey'});
    border-bottom: ${props => props.isExpanded ? '5px solid var(--dark)' : 'none'};
`

const PaddedDiv = styled.div`
    padding: 20px;

    & a {
        text-decoration: none;
        color: var(--${props => props.linkColor || 'primary'});
    }
    & a:hover {
        font-weight: 900;
    }
`

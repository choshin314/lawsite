import React from "react"
import styled from "styled-components"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
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
                        <FontAwesomeIcon icon={faAngleDown} />
                    </AccordionTitleLight> 
                    :
                    <AccordionTitle onClick={() => toggleExpanded(prev => !prev)} isExpanded={isExpanded}>
                        <span>{title}</span>
                        <FontAwesomeIcon icon={faAngleDown} />
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
    background-color: ${props => props.isExpanded ? "var(--light)" : "var(--medium)"};
    color: ${props => props.isExpanded ? "var(--dark)" : "var(--white)"};

    & svg {
        transition: all 0.4s ease-in-out;
        transform: rotate(${props => props.isExpanded ? "-180deg" : "0deg"});
    }
    &:hover, &:active {
        background-color: var(--light);
        color: var(--dark);
    }

` 
const AccordionTitleLight = styled(AccordionTitle)`
    background-color: ${props => props.isExpanded ? "var(--dark)" : "var(--light)"};
    color: ${props => props.isExpanded ? "var(--white)" : "var(--dark)"};

    &:hover, &:active {
        background-color: var(--dark);
        color: var(--white);
    }
`

const AccordionContent = styled.div`
    max-height: ${props => props.isExpanded ? "250vh" : "0"};
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
    background: var(--${props => props.bgContent || 'white'});
    color: var(--${props => props.colorContent || 'dark'});
    border-radius: 3px;
`

const PaddedDiv = styled.div`
    padding: 20px;

    & a {
        text-decoration: none;
        color: var(--${props => props.linkColor || 'medium'});
    }
    & a:hover {
        font-weight: 900;
    }
`

import React from "react"
import styled from "styled-components"

function ContentSection({bgSection, bgContent, children}) {
    return (
        <Section bgSection={bgSection} >
            <ContentWrapper bgContent={bgContent}>{children}</ContentWrapper>    
        </Section>
    )
}

export default ContentSection

const Section = styled.section`
    
    background-color: var(--${props => props.bgSection ? props.bgSection : 'white'});
    padding: 2em 0;
    width: 100%;
`
const ContentWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 1em .5em; 
    background-color: var(--${props => props.bgContent ? props.bgContent : 'white'});

    @media(min-width: 768px) {
      width: 80%;
      max-width: 960px;
      padding: 1.5em 2.5em;
    }
`

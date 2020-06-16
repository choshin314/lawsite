import React from "react"
import styled from "styled-components"

function FlexRow({title, subtitles, paragraphs, children, bottomBorder}) {
    return (
        <FlexContainer>
            <FlexItemSide>
                <h2>{title.toUpperCase()}</h2>
                {subtitles && <SubtitleList>{subtitles.map(el => <li>{el}</li>)}</SubtitleList>}
            </FlexItemSide>
            <FlexItemMain bottomBorder={bottomBorder}>
                {paragraphs ? paragraphs.map(par => <p>{par}</p>) : children}
                {/*pass in content to be rendered via EITHER: 
                    a.) props.paragraphs, which is an array of strings; or
                    b.) props.children, for when we need to pass in JSX (ex - paragraphs with nested anchors)
                */}
            </FlexItemMain>
        </FlexContainer>
    )
}

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    padding: 1em 0;
    
    @media(min-width: 981px) {
        flex-direction: row;
    }
`

const FlexItemSide = styled.div`
    padding: 1em;
    background: var(--primary);
    color: var(--white);
    overflow: hidden;

    & h2 {
        font-size: 1.3em;
    }

    @media(min-width: 981px) {
        width: 23%;
        & h2 {
            font-size: 1.3em;
        }
    }
`

const SubtitleList = styled.ul`
    font-size: 1em;
    list-style-type: square;
    padding-left: 1em;
    margin-top: 1em;
    display: none;

    & li {
        margin-bottom: .5em;
    }

    @media (min-width: 981px) {
        display: block;
    }
`

const FlexItemMain = styled.div`
    padding: 1em;
    border: none;
    line-height: 1.5;

    & p {
        padding-bottom: 1em;
        font-family: 'Roboto';
    }

    & a {
        color: var(--primary);
        text-decoration: none;

        &:hover {
            color: var(--dark);;
        }
    }

    @media(min-width: 981px) {
        width: 73%;
        border-bottom: ${props => props.bottomBorder ? `var(--primary) 2px solid` : 'none'};
    }
`

export default FlexRow
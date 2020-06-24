import React from "react"
import styled, {css} from "styled-components"

const SliderDots = ({slides, current}) => (
    <Container length={slides.length}>
        {slides.map((slide, i) => (
            <Dot key={slide.name} current={current === i} />
        ))}
    </Container>
)

const Container = styled.div`
    display: none;
    @media(min-width: 768px) {
        display: flex;
        width: 100%;
        margin: 0 auto;
        
        ${props => {
            if(props.length > 9) {
            return css`
                flex-wrap: wrap;
            `}
        }}
    }
`

const Dot = styled.button`
    border: 0;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background: ${({current}) => current ? 'var(--accent)' : 'rgba(0, 0, 0, .75)'};
    margin: .5rem;
    outline: none;
    cursor: pointer;
`

export default SliderDots
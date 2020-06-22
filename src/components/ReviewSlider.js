import React, {useState, useEffect} from "react"
import styled from "styled-components"
import ReviewCard from "./ReviewCard"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const ReviewSlider = ({title, reviews}) => {
    const [state, setState] = useState({
        translate: 0,
        current: 0
    })

    //Need to increment state.translate by 1fr on each click
    const nextSlide = () => {
        let incrementTranslate = 100 / reviews.length;
        //if we are on the last slide, reset to starting position
        if(state.current === reviews.length - 1) return (setState({current: 0, translate: 0}));
        //else increment to next slide
        setState(prev => ({
            translate: prev.translate + incrementTranslate,
            current: prev.current + 1
        }))
    }

    const prevSlide = () => {
        let incrementTranslate = 100 / reviews.length;
        if(state.current === 0) return (setState({current: reviews.length - 1, translate: (reviews.length - 1)*incrementTranslate}));
        setState(prev => ({
            translate: prev.translate - incrementTranslate,
            current: prev.current - 1
        }))
    }

    return (
        <SliderContainer>
            <SliderTitle>{title}</SliderTitle>
            <SliderTrack length={reviews.length} translate={state.translate}>
                {reviews.map((review, i) => (
                    <Slide>
                        <ReviewCard 
                            name={review.name}
                            title={review.title}
                            reviewDate={review.reviewDate}
                            reviewSrc={review.reviewSrc}
                            reviewUrl={review.reviewSiteUrl}
                            body={review.body}
                        />
                    </Slide>
                ))}
            </SliderTrack>
            <SliderBtn prev onClick={prevSlide}><FontAwesomeIcon icon="chevron-left" size="2x"/></SliderBtn>
            <SliderBtn next onClick={nextSlide}><FontAwesomeIcon icon="chevron-right" size="2x"/></SliderBtn>
        </SliderContainer>
    )

}

const SliderContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    margin-bottom: 2rem;
    padding-top: 1rem;
`
const SliderBtn = styled.button`
    position: absolute;
    top: 50%;
    ${props => props.prev ? `left: 0;` : `right: 0;`}
    transform: translateY(50%);
    cursor: pointer;
    background: transparent;
    border: transparent;
    color: var(--primary);
`

const SliderTitle = styled.h2`
    color: var(--primary);
    font-size: 2em;
    margin-bottom: 1.5em;
    text-align: center;
`

//SliderTrack width should be # of slides (props.length) * slideWidth (400px).  
//Overflow will be hidden by SliderContainer.
//Translate value will be held in state
const SliderTrack = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.length}, 1fr);
    width: ${props => 400 * props.length}px;
    padding-bottom: 1rem;
    transform: translateX(-${props => props.translate}%);
    transition: transform 0.45s ease-in;
`

const Slide = styled.div`
    grid-column: span 1;
    width: 350px;
    @media(min-width: 768px) {
        width: 400px;
    }
`

export default ReviewSlider
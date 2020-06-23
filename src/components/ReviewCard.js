import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import profileImg from "../images/profile-pic.png"

function ReviewCard({name, reviewDate, reviewSrc, reviewUrl, body, title}) {
    const date = new Date(reviewDate * 1000).toLocaleString().split(',')[0];

    return (
        <Card>
            <ReviewContainer>
                <ReviewText>
                    <Span>
                        <FontAwesomeIcon icon="star" size="1x" />
                        <FontAwesomeIcon icon="star" size="1x" />
                        <FontAwesomeIcon icon="star" size="1x" />
                        <FontAwesomeIcon icon="star" size="1x" />
                        <FontAwesomeIcon icon="star" size="1x" />
                    </Span>
                    {title && <ReviewTitle>{title}</ReviewTitle>}
                    {body}
                </ReviewText>
                <ReviewInfoContainer>
                    <ReviewPic src={profileImg} />
                    <div>
                        <Username>{name}</Username>
                        <ReviewDate>{typeof reviewDate === 'string' ? reviewDate : date}</ReviewDate>
                    </div>
                </ReviewInfoContainer>
                <A href={reviewUrl}
                target="_blank">Read full review at {reviewSrc}</A>
            </ReviewContainer>
        </Card>
    )
}

const Card = styled.div`
    width: 90%;
    height: 350px;
    padding: 1.5rem;
    box-shadow: 2px 2px 10px black;
    border-radius: 10px;
    line-height: 1.5;
    font-family: 'Roboto Slab';
    margin: 0 auto;

    @media(min-width: 768px) {
        width: 300px;
        height: 400px;
    }
`

const ReviewContainer = styled.div`
    height: 100%;
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    border: 1px solid #ededed;
    padding: 1em;
`
const ReviewTitle = styled.h4`
    color: #427fed;
    font-weight: bold;
    font-size: 1.2em;
`

const ReviewText = styled.div`
    grid-row: span 4;
    border-bottom: 1px solid #ededed;
    color: #333;
    word-wrap: break-word;
    overflow-y: auto;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background: #d3d3d3;
    }
    &::-webkit-scrollbar-thumb {
        background: black;
        border-radius: 10px;
    }
`
const Span = styled.span`
    color: rgb(231, 113, 27);
    display: block;
`
const ReviewInfoContainer = styled.div`
    grid-row: span 1;
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
`

const ReviewPic = styled.img`
    
    margin-right: 1em;
`

const Username = styled.span`
    display: block;
    color: #427fed;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`
const ReviewDate = styled.span`
    color: #777;
`

const A = styled.a`
    text-decoration: none;
    color: #999;

    &:hover {
        color: #000;
    }
`


export default ReviewCard
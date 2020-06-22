import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function ContactCard({card}) {
    return (
        <Container href={card.link} target="_blank">
            <Card>
                <CardIconWrapper>
                    <FontAwesomeIcon icon={card.icon} size="3x"/>
                </CardIconWrapper>
                <div>
                    <Title>{card.title}</Title>
                    <Par>{card.text}</Par>
                    {card.text2 ? <Par>{card.text2}</Par> : <br />}
                </div>
            </Card>
        </Container>
    )
}

export default ContactCard

const Container = styled.a`
    grid-column: span 1;
    text-decoration: none;
    color: var(--white);
    background-color: var(--primary);
    padding: 1em;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    height: 100%;
`
const CardIconWrapper = styled.div`
    width: 100px;
    height: 100px;
    border: solid 2px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-bottom: 1em;

    & svg {
        height: 100%;
    }
`
const Title = styled.h3`
    font-size: 1.3em;
`
const Par = styled.p`
    line-height: 1.5;
`
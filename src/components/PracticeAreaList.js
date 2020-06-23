import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import PracticeArea from "./PracticeArea"
import drugs from "../images/practice-areas/drugs.jpeg"
import dwi from "../images/practice-areas/dwi.jpeg"
import felonies from "../images/practice-areas/felonies.jpeg"
import misdemeanors from "../images/practice-areas/misdemeanors.jpeg"
import stealing from "../images/practice-areas/stealing.png"
import traffic from "../images/practice-areas/traffic.jpeg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const practiceAreas = [
    {
        id: 1,
        image: drugs,
        link: "/criminal-defense/st-louis-drug-lawyer",
        text: "Drug Charges"
    },
    {
        id: 2,
        image: dwi,
        link: "/st-louis-dwi-lawyer",
        text: "DWI & DUI"
    },
    {
        id: 3,
        image: felonies,
        link: "/criminal-defense/felony-charges",
        text: "Felonies"
    },
    {
        id: 4,
        image: misdemeanors,
        link: "/criminal-defense/misdemeanor-charges",
        text: "Misdemeanors"
    },
    {
        id: 5,
        image: stealing,
        link: "/criminal-defense/#stealing",
        text: "Stealing"
    },
    {
        id: 6,
        image: traffic,
        link: "/st-louis-traffic-lawyer",
        text: "Traffic Law"
    }
]


const PracticeAreaList = () => (
    <Section>
        <Block>
            <h2>Need a <span>St. Louis</span> criminal attorney?</h2>
            <p>Attorney Shin Cho will fight for you to get the best result every step of the way.</p>
            <Btn to="/criminal-defense">More Practice Areas<FontAwesomeIcon icon="chevron-right" size="xs" /></Btn>
        </Block>
        <Grid>
            {practiceAreas.map(area => <PracticeArea key={area.id} image={area.image} text={area.text} link={area.link} />)}
        </Grid>
    </Section>
)

export default PracticeAreaList

const Section = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    @media(min-width: 1080px) {
        grid-template-columns: 1fr 2fr; 
    }
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--dark);
    color: var(--white);
    padding: 2em 10%;
    h2 {
        font-size: 1.8rem;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 2rem;
        letter-spacing: 1px;

        span {
            white-space: nowrap;
        }
    }
    p {
        font-size: 1.3rem;
        margin-bottom: 2rem;
    }

    @media(min-width: 980px) {
        padding: 2em 10%;
    }

`

const Btn = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 2px;
    font-weight: bold;
    font-size: 1.3em;
    transition: all .3s ease-in-out;
    background: var(--white);
    color: var(--primary);
    border: var(--primary) 2px solid;
    @media(min-width: 980px) {
        font-size: 1.2em;
        padding: 0.5em;
        white-space: nowrap;
    }

    & svg {
        height: 1.2rem;
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
`
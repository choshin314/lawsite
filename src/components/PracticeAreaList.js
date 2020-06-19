import React from "react"
import styled from "styled-components"
import PracticeArea from "./PracticeArea"
import bgPracticeCrim from "../images/bgPracticeCrim.jpeg"
import bgPracticeDWI from "../images/bgPracticeDWI.jpeg"
import bgPracticeTraffic from "../images/bgPracticeTraffic.jpeg"
import bgPracticePI from "../images/bgPracticePI.jpeg"

const practiceAreas = [
    {
        id: 1,
        image: bgPracticeCrim,
        link: "/criminal-defense#violent-offenses",
        text: "Assault"
    },
    {
        id: 2,
        image: bgPracticeDWI,
        link: "/st-louis-dwi-lawyer",
        text: "DWI & DUI"
    },
    {
        id: 3,
        image: bgPracticeDWI,
        link: "/criminal-defense/felony-charges",
        text: "Felonies"
    },
    {
        id: 4,
        image: bgPracticeDWI,
        link: "/criminal-defense/misdemeanor-charges",
        text: "Misdemeanors"
    },
    {
        id: 5,
        image: bgPracticeTraffic,
        link: "/st-louis-traffic-lawyer",
        text: "Traffic Law"
    },
    {
        id: 6,
        image: bgPracticePI,
        link: "/criminal-defense/#stealing",
        text: "Stealing"
    }
]

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    background-color: var(--white);
    border-radius: 10px;
`

const PracticeAreaList = () => {
    return (
        <FlexContainer>
            {practiceAreas.map(area => <PracticeArea key={area.id} image={area.image} text={area.text} link={area.link} />)}
        </FlexContainer>
    )
}

export default PracticeAreaList
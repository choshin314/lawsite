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
        link: "/criminaldefense",
        text: "Criminal Defense"
    },
    {
        id: 2,
        image: bgPracticeDWI,
        link: "/st-louis-dwi-lawyer",
        text: "DWI & DUI"
    },
    {
        id: 3,
        image: bgPracticeTraffic,
        link: "/st-louis-traffic-lawyer",
        text: "Traffic Law"
    },
    {
        id: 4,
        image: bgPracticePI,
        link: "/personalinjury",
        text: "Personal Injury"
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
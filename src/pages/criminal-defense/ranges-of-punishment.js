import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import HeroSection from "../../components/HeroSection"
import img from "../../images/heroCrim.jpeg"
import ContentSection from "../../components/ContentSection"
import {Title} from "../../components/styledLib"
import ranges from "../../data/ranges.json"
import FlexRow from "../../components/FlexRow"

const helmetData = {
    title: "Ranges of Punishment",
    description: "Overview of ranges of punishment (e.g., min or max sentences) for the various Missouri criminal offense classes."
}

const RangesOfPunishment = () => (
    <Layout helmetData={helmetData}>
        <main>
            <HeroSection 
                title="Ranges of Punishment for Criminal Offenses"
                buttonText="Schedule Your Free Consultation!"
                bgImage={img}
            />
            <ContentSection>
                <Title>Felony and Misdemeanor Classifications</Title>
                <Par>Depending on which criminal offense has been charged, the criminal charge will fall under one of the following classifications.  The range of punishment varies quite a bit depending on the severity of the offense.  In addition to these standard ranges of punishment, Missouri law also provides for “enhancement” of punishment in a number of different scenarios.  These typically involve instances where the defendant has previously been convicted or plead guilty to other crimes.</Par>
                <FlexRow title="Missouri Felony Charges" borderFull>
                    <GridContainer>
                        {ranges.felonies.map(el => <><GridItemA>{`Class ${el.classification} Felony`}</GridItemA><GridItemB>{el.range}</GridItemB></>)}
                    </GridContainer>
                </FlexRow>
                <FlexRow title="Missouri Misdemeanor Charges" borderFull>
                    <GridContainer>
                        {ranges.misdemeanors.map(el => <><GridItemA>{`Class ${el.classification} Misdemeanor`}</GridItemA><GridItemB>{el.range}</GridItemB></>)}
                    </GridContainer>
                </FlexRow>
            </ContentSection>
        </main>
    </Layout>
)


export default RangesOfPunishment

const Par = styled.p`
    line-height: 1.5;
`

const GridContainer = styled.div`
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    border: 3px solid var(--dark);
    line-height: 1.5;
    margin: -1rem;
`

const GridItemA = styled.div`
    grid-column: span 1; 
    color: var(--white);
    background: var(--dark);
    padding: .5em 1em;
`

const GridItemB = styled.div`
    color: var(--dark);
    grid-column: span 3;
    padding: .5em 1em;
`
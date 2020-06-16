import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import HeroSection from "../../components/HeroSection"
import img from "../../images/heroCrim.jpeg"
import ContentSection from "../../components/ContentSection"
import Accordion from "../../components/Accordion"
import misdemeanors from "../../data/misdemeanorContent.json"
import {Title, Par} from "../../components/styledLib"

const helmetData = {
    title: "Misdemeanor Charges",
    description: "Misdemeanor criminal convictions can have severe consequences on your career or education prospects. However, with the right defense, you can protect your future - read on for more info!"
}

const MisdemeanorCharges = () => (
    <Layout helmetData={helmetData}>
        <main>
            <HeroSection 
                title="MISDEMEANOR CHARGES"
                description="If you have been accused of committing a misdemeanor offense, do not delay in speaking to a criminal defense attorney!  The Law Office of Shin Cho offers free consultations for anyone facing misdemeanor charges in St. Louis County or any surrounding counties.  Call us today to schedule a no-strings-attached consultation."
                buttonText="Contact Us"
                bgImage={img}
            />
            <ContentSection>
                <D>
                    <Title color="var(--primary)">Misdemeanor Charges Under Missouri Law</Title>
                    <Par>
                    Misdemeanor crimes in Missouri are divided into four main classes, in accordance with their severity.  Additionally, some misdemeanors are unclassified, meaning that they do not fall squarely into one of the four categories.  Read on below for more information related to misdemeanor offenses, including ranges of punishment and collateral consequences.
                    </Par>
                    {misdemeanors.map(misdClass => (
                        <Accordion title={misdClass.title}>
                            <Par linkColor="mediumblue">{misdClass.introText}</Par>
                            <StyledList>
                                {misdClass.statutes.map(statute => (
                                    <li><a href={statute.url} target="_blank" rel="noopener noreferrer">{statute.name}</a></li>
                                ))}
                            </StyledList>
                        </Accordion>
                    ))}
                </D>
                <Divider><hr /></Divider>
                <D>
                    <Title>Why Hire a Criminal Defense Attorney?</Title>
                    <Par>
                    When charged with a criminal offense, it is imperative to have a skilled, knowledgeable criminal defense lawyer in your corner.  St. Louis criminal defense attorney, Shin Cho, has successfully defended numerous misdemeanor cases.  It is important to choose a criminal defense lawyer who has the experience and skill required to protect your future interests, either by beating the case outright or by negotiating a plea bargain with appropriate terms and conditions.
                    </Par>
                    <Par linkColor="primary">
                    At the Law Office of Shin Cho, our focus goes beyond simply avoiding jail time.  That’s because we also recognize that protecting the future of our misdemeanor clients requires more than just the bare minimum of keeping you out of jail.  Oftentimes, there are a lot more important things at stake, such as future education or employment opportunities.  Many schools and employers require that you disclose your criminal history in the application process, and some will even run a criminal background check to verify your answers.  This is especially so in the professional sector, as many jobs require that you have a professional license that is issued by a quasi-governmental licensing board.  Examples include <span><a href="https://pr.mo.gov/boards/nursing/FrequentlyAskedQuestions.pdf">nursing boards</a></span>,  
                    <span> <a href="https://pr.mo.gov/physiciansandsurgeons-forms.asp">physician licensing boards</a></span>, 
                    <span> <a href="http://www.nationaljurist.com/national-jurist-magazine/bar-application-character-and-fitness-background-check-part-1">attorney licensing authorities</a></span>, and  
                    <span> <a href="https://nationwidelicensingsystem.org/profreq/background/Pages/default.aspx">mortgage broker licensing authorities</a></span>.
                    </Par>
                    <Par>
                    Protecting these interests requires a more nuanced and creative defense.  Our forte is in creative solutions, so you can rest assured that both your freedom and future will be in good hands here.  If you have been charged with a misdemeanor offense in St. Louis, Missouri or the surrounding area, contact us today to discuss your options with a criminal defense attorney.
                    </Par>
                </D>
            </ContentSection>
        </main>
    </Layout>
)

const D = styled.div`
    margin-bottom: 0em;
    &:last-child {
        margin: 0;
    }
`
const StyledList = styled.ul`
    list-style-type: square;
    & a {
        text-decoration: none;
        color: var(--primary);

        &:hover {
            font-weight: 700;
        }
    }
`

const Divider = styled.span`
    display: block;
    margin: 1em auto;
    width: 50%;
    max-width: 20rem;
    overflow: hidden;

    & hr {
        border: var(--accent) solid 5px;
        border-radius: 2px;
    }
`

export default MisdemeanorCharges
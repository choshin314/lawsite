import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import HeroSection from "../../components/HeroSection"
import img from "../../images/heroCrim.jpeg"
import ContentSection from "../../components/ContentSection"
import Accordion from "../../components/Accordion"
import felonies from "../../data/felonyContent.json"
import {Title, Par} from "../../components/styledLib"

const helmetData = {
    title: "Felony Charges",
    description: "Missouri felony charges are divided into A, B, C, D, and E classes (as well as some unclassified felonies). This is an overview of felony charges in MO." 
}

const FelonyCharges = () => (
    <Layout helmetData={helmetData}>
        <main>
            <HeroSection 
                title="FELONY CHARGES"
                description="Felony charges are considered the most severe category of criminal charges in Missouri.  If you have been charged with a felony offense, do not delay in speaking to a criminal defense attorney!  The Law Office of Shin Cho offers free consultations for anyone charged with a felony in St. Louis County or the surrounding counties.  Call us today to schedule a no-strings-attached consultation."
                buttonText="Contact Us"
                bgImage={img}
            />
            <ContentSection>
                <D>
                    <Title color="var(--primary)">Felony Charges Under Missouri Law</Title>
                    <Par>
                        Missouri felony charges are divided into five main classes, in accordance with their severity.  Class A felony charges are the most serious felony offenses in Missouri, while class E felony charges are the least serious. There are also some felony charges that are unclassified, meaning that their range of punishment does not fall squarely within one of the five classes.  Read on below for more information related to felony offenses, including the ranges of punishment and the collateral consequences of felony convictions.
                    </Par>
                    {felonies.map(felClass => (
                        <Accordion title={felClass.title}>
                            <Par linkColor="mediumblue">{felClass.introText}</Par>
                            <StyledList>
                                {felClass.statutes.map(statute => (
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
                    When facing felony charges, it is imperative to have a skilled, knowledgeable criminal defense attorney in your corner.  Criminal defense attorney Shin Cho has successfully defended clients against the full range of felony charges, from Class E to Class A.  It is important to choose a criminal defense lawyer who has the experience and skill required to protect your future interests against the potentially devastating consequences of these felony charges.  Depending on the case, this can involve beating the case outright by going to trial, or negotiating a plea bargain with the necessary terms and conditions to best protect you.
                    </Par>
                    <Par linkColor="primary">
                    At the Law Office of Shin Cho, our focus goes beyond simply avoiding jail time for felony charges.  We recognize that there are other important things at stake, including school admissions, qualifying for financial aid, and future career opportunities.  These days, most hiring managers and school admissions offices will require that you disclose your criminal record, and will run a criminal background check to verify your answers.  This is especially true in the professional sector, as many jobs require that you have a professional license that is issued by a quasi-governmental licensing board.  Examples include <span><a href="https://pr.mo.gov/boards/nursing/FrequentlyAskedQuestions.pdf">nursing boards</a></span>,  
                    <span> <a href="https://pr.mo.gov/physiciansandsurgeons-forms.asp">physician licensing boards</a></span>, 
                    <span> <a href="http://www.nationaljurist.com/national-jurist-magazine/bar-application-character-and-fitness-background-check-part-1">attorney licensing authorities</a></span>, and  
                    <span> <a href="https://nationwidelicensingsystem.org/profreq/background/Pages/default.aspx">mortgage broker licensing authorities</a></span>.
                    </Par>
                    <Par>
                    If you have been charged with a felony offense, this could be an incredibly stressful time in your life.  The Law Office of Shin Cho is here to help put your mind at ease in these trying times.  Call today for a free consultation with an experienced criminal defense attorney.
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

export default FelonyCharges
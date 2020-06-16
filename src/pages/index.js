import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection.js"
import ContentSection from "../components/ContentSection.js"
import BadgeList from "../components/BadgeList"
import PracticeAreaList from "../components/PracticeAreaList"

import bgSTL from "../images/bgSTL.jpeg"
import {Title, Par} from "../components/styledLib"

const helmetData = {
    title: 'Home',
    description: "St. Louis criminal defense, DWI & DUI lawyer. Based in South St. Louis County, the Law Office of Shin Cho offers legal services throughout the St. Louis Metro Region."
}

const HomePage = (props) => (
    <Layout helmetData={helmetData} contactMap>
        <main>
            <HeroSection
                bgImage={bgSTL}
                title="St. Louis Criminal Defense & DWI Attorney"
                description="Client satisfaction is our number one priority.  Charged with a criminal offense?  Your freedom and reputation will be defended with determination and skill.  Accused of drunk driving and charged with DWI or DUI?  We will fight to protect you and your driving privileges.  Whatever your need may be, the Law Office of Shin Cho is here to help."
                buttonText="Contact Us"
            />
            <ContentSection>
                <BadgeList />
                <Divider />

                <Title>Client-Centered Criminal Defense at Affordable Rates</Title>
                <Par>
                The Law Office of Shin Cho prides itself in its proven record of successfully representing the good people of the St. Louis Metropolitan Area and surrounding counties, including St. Louis County, St. Louis City, Jefferson County, and St. Charles County.  If you are in need of a St. Louis criminal defense attorney or St. Louis DWI attorney, our office is ready to dedicate the time, effort, and skill needed to ensure that you receive the optimal result.
                </Par>
                <Par>
                Our office is located in South County, St. Louis, MO and provides DWI defense, criminal defense, and traffic ticket defense in all of the surrounding counties.  Here at the Law Office of Shin Cho, you will find that excellence in legal representation at reasonable, affordable rates.  The first consultation is free, so don’t hesitate to call if you think you might need a defense attorney!
                </Par>
            <Divider />
                <Title>Our Practice Areas</Title>
                <PracticeAreaList />
            </ContentSection>
        </main>
    </Layout>    
)

export default HomePage

const Divider = styled.hr`
    border-top: var(--accent) solid 3px;
    border-radius: 5px;
    margin-top: 1em;
    margin-bottom: 1em;
`

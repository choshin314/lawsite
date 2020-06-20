import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import {HeroButton} from "../components/HeroSection.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import ContentSection from "../components/ContentSection.js"
import BadgeList from "../components/BadgeList"
import PracticeAreaList from "../components/PracticeAreaList"
import attorneypic from "../images/st-louis-criminal-lawyer-shin-cho.jpg"
import {Divider, Title, Par} from "../components/styledLib"

const helmetData = {
    title: 'Home',
    description: "St. Louis criminal defense, DWI & DUI lawyer. Based in South St. Louis County, the Law Office of Shin Cho offers legal services throughout the St. Louis Metro Region."
}

const HomePage = (props) => (
    <Layout helmetData={helmetData} contactMap>
        <main>
            <Section>
                <Overlay />
                <Content>
                    <Flex>
                        <h1>Experienced and Passionate <Span>St. Louis</Span> Criminal Defense Attorney</h1>
                        <p>Attorney Shin Cho has a proven record of excellence in case results and client satisfaction. He understands what's on the line for his clients and prides himself on his client service and his ability to obtain optimal results in the courtroom. Schedule a free consultation today to see how he can help you.</p>
                    </Flex>

                    <Button><span>Contact Us Today</span><FontAwesomeIcon icon="chevron-right" size="xs" /></Button>
                    
                </Content>
            </Section>
            <ContentSection>
                <BadgeList />
                <Divider><hr /></Divider>

                <Title>Client-Centered Criminal Defense at Affordable Rates</Title>
                <Par>
                The Law Office of Shin Cho prides itself in its proven record of successfully representing the good people of the St. Louis Metropolitan Area and surrounding counties, including St. Louis County, St. Louis City, Jefferson County, and St. Charles County.  If you are in need of a St. Louis criminal defense attorney or St. Louis DWI attorney, our office is ready to dedicate the time, effort, and skill needed to ensure that you receive the optimal result.
                </Par>
                <Par>
                Our office is located in South County, St. Louis, MO and provides DWI defense, criminal defense, and traffic ticket defense in all of the surrounding counties.  Here at the Law Office of Shin Cho, you will find that excellence in legal representation at reasonable, affordable rates.  The first consultation is free, so don’t hesitate to call if you think you might need a defense attorney!
                </Par>
                <Divider><hr /></Divider>
                
            </ContentSection>
            <PracticeAreaList />
        </main>
    </Layout>    
)

export default HomePage

const Section = styled.section`
    position: relative;
    margin-top: 10vh;
    width: 100%;
    padding: 10%;
    background-image: url(${attorneypic});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    @media(min-width: 768px){
        background-attachment: fixed;
        background-position: 50% 10vh;
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--dark);
    opacity: 0.7;
`

const Content = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    color: var(--white);
    @media(min-width: 768px) {
        width: 80%;
    }
`
const Button = styled(HeroButton)`
    @media(min-width: 768px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-shadow: 2px 2px 3px black;

    h1 {
        font-size: 2rem;
        flex: 1 0 40%;
        text-align: left;
        margin-bottom: 1rem;
    }

    p {
        flex: 1 0 40%;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: .5px;
        margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        margin-bottom: 2em;

        h1 {
            font-size: 2rem;
            text-align: right;
            margin-right: 2rem;
        }
        p {
            line-height: 1.5;
            padding-top: .3rem;
            margin-left: 2rem;
        }
    }


`

const Span = styled.span`
    white-space: nowrap;
`
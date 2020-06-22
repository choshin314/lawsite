import React from "react"
import styled, {css} from "styled-components"
import Layout from "../components/Layout"
import ContentSection from "../components/ContentSection.js"
import HeroSection from "../components/HeroSection.js"
import heroGeneric from "../images/heroGeneric.jpeg"
import Map from "../components/Map"
import ContactCard from "../components/ContactCard"
import {Title, Par} from "../components/styledLib"

const helmetData = {
    title: "Contact Us",
    description: "Schedule your free consultation with a criminal defense & personal injury attorney today. Call or email now to set up your appointment!"
}
const ContactPage = () => (

    <Layout helmetData={helmetData} >
        <main className="page-container">
            <HeroSection 
                bgImage={heroGeneric}
                title="Contact Us"
                description="Speak to an attorney about your case today.  Consultations are free, and can be requested by phone or email."
            />
            <ContentSection>
                <Container columns="3">
                    {contactCards.map(card => <ContactCard card={card} />)}
                </Container>
                <Container columns="2" bg="dark">
                    <Div>
                        <Par color="white">Located in the South County (St. Louis County)  Mehlville, Lemay, Oakville area, our office is just down the street from the <a href="https://www.stlouisco.com/Law-and-Public-Safety/Municipal-Courts/Locations-and-Hours/South-Division">St. Louis County Municipal Court South Division</a>.  The Law Office of Shin Cho represents clients in criminal defense, DUI and DWI, and traffic ticket cases throughout the Greater St. Louis Metro Area.</Par>
                    </Div>
                    <Map />
                </Container>
            </ContentSection>
        </main>
    </Layout>
)

export default ContactPage

const Container = styled.div`
    width: 100%;
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr;
    ${props => props.bg && css`background: var(--${props.bg});`}
    margin-bottom: 1em;

    @media (min-width: 981px) {
        grid-template-columns: repeat(${props => props.columns}, 1fr);    
    }   
`

const Div = styled.div`
    padding: 1em;
    a {
        color: var(--accent);
        position: relative;
        &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            border-bottom: var(--accent) 2px solid;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform .2s ease-in;
        }
    }
    a:hover, a:focus {
        &::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`

const contactCards = [
    {
        title: "Call Us Today",
        text: "(314) 312-1228",
        link: "tel: +13143121228",
        icon: "phone"
    },
    {
        title: "Email Us Today",
        text: "info@defenseattorneystl.com",
        link: "mailto:info@defenseattorneystl.com",
        icon: "envelope"
    },
    {
        title: "Visit Us Today",
        text: '3245 Lemay Ferry Rd',
        text2: 'St. Louis, MO 63125',
        link: "https://goo.gl/maps/rjvosNE88aS2",
        icon: "map-marker-alt"
    }
]
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"
import ContentSection from "../components/ContentSection"
import FlexRow from "../components/FlexRow"
import heroGeneric from "../images/heroGeneric.jpeg"
import {Title, Par} from "../components/styledLib"

const Divider = styled.hr`
    margin: 2em 0;
    border: solid var(--dark) 2px;
`
const helmetData = {
    title: 'Attorney Bio',
    description: "St. Louis criminal defense attorney represents clients in all criminal matters, DUI and DWI matters, and traffic tickets across the St. Louis Metro Region."
}

const About = () => (
    <Layout helmetData={helmetData} >
        <main>
            <HeroSection
                bgImage={heroGeneric}
                title={
                    <>
                        <span>ABOUT SHIN CHO:</span>
                        <span style={{display: "block",}}>ST. LOUIS CRIMINAL DEFENSE ATTORNEY</span>
                    </>   
                }
                description="At the Law Office of Shin Cho, clients can rest assured that their cases are in good hands.  Shin Cho has handled well over a thousand criminal defense, DWI, traffic, and personal injury matters, through every single step of the process, from pre-charge phase to jury trial.  Shin also recognizes the importance of putting his clients’ minds at ease, and taking the weight of the case off of their backs.  Whether it be a simple traffic ticket, a DWI and/or license suspension matter, a serious felony criminal matter, or a personal injury claim, you can rely on Mr. Cho to guide you through the legal process."
                buttonText="Contact Us"
            />
            <ContentSection>
                <div>
                    <Title>Attorney Bio</Title>
                    <Par>Shin is a St. Louis County native, having attended Parkway Central High School in Chesterfield, Missouri, before going on to the University of Missouri-Columbia for his underegraduate studies.  From there, Shin earned his law degree from the University of Missouri School of Law in Columbia.</Par>
                    <Par>Shin has been recognized by his peers and clients for excellence in his field as an attorney, receiving the Avvo Client’s Choice Award multiple years for outstanding client satisfaction.  He has also been recognized as a Super Lawyers Rising Star, an honor shared by no more than 2.5 percent of attorneys in each state.</Par>
                </div>
                <Divider/>
                <div>
                    <Title>Types of Cases We Handle</Title>
                    {aboutData.map(({title, description}, i) => <FlexRow title={title} key={i} borderBtm>{description}</FlexRow>)}
                </div>
            </ContentSection>
        </main>
    </Layout>
)

const aboutData = [
    {
        title: "Driving While Intoxicated (DWI / DUI Law)",
        description: [
            <p>Defense attorney Shin Cho has handled numerous drunk driving cases, and can help you navigate the often-confusing process of defending yourself against criminal Missouri or St Louis DWI charges and fighting to keep your driver’s license.</p>
        ]
    },
    {
        title: "Drug Possession & Drug Distribution Charges",
        description: [
            <p>St Louis Criminal Lawyer Shin Cho has personally seen to several drug charges being thrown out, after successfully arguing motions to suppress evidence obtained as a result of a warrantless search or seizure, or other constitutional violation.</p>,
            <p>A good defense attorney knows that the fight isn’t anywhere close to lost simply because the police find drugs / contraband / narcotics in a Client’s house, car, or even in his or her pockets. St Louis Criminal Attorney Shin Cho is highly-skilled and experienced in looking deeper into the evidence to see if the drugs were found in violation of his Clients’ constitutional rights. </p>,
            <p>We represent clients in all misdemeanor or felony drug charges, including:</p>,
            <ul>
                <li>Possession of a Controlled Substance</li>
                <li>Possession with Intent to Distribute</li>
                <li>Distribution / Delivery of a Controlled Substance</li>
                <li>Unlawful Use or Possession of Drug Paraphernalia</li>
            </ul>
        ]
    },
    {
        title: "stealing-related criminal charges",
        description: [
            <p>Most people accused of theft do not have prior criminal history involving more serious offenses, such as violent crimes.  As a defense attorney, Shin Cho knows this is an important factor to consider, both for trial preparation and plea negotiation purposes.  Additionally, oftentimes, it is much more difficult to prove a theft than the State lets on.  For these reasons and more, it is important to retain the services of a criminal defense lawyer who can ensure that your rights are protected throughout the criminal law process.</p>,
            <p>We represent clients as to all financial and property crimes, such as:</p>,
            <ul>
                <li>Burglary</li>
                <li>Petty Theft / Petty Larceny (Shoplifting)</li>
                <li>Misdemeanor Stealing</li>
                <li>Felony Stealing</li>
                <li>Receiving Stolen Property</li>
            </ul>
        ]
    },
    {
        title: "violent crimes",
        description: [
            <p>Prosecutors and judges take violent crimes the most seriously, and under Missouri law, certain crimes classified as “dangerous” offenses can carry harsher sentences.</p>,
            <p>But many people accused of violent offenses are truly innocent. Often the situation arose out of self-defense, accident, misidentification, false accusations or mental illness. Furthermore, it is important to hire an attorney with the skills necessary to ensure that the burden of proof remains on the State, and the presumption of innocence protects you or a loved one at all stages of the process. </p>,
            <p>We defend clients against violent crimes charges such as:</p>,
            <ul>
                <li>Homicides</li>
                <li>Robbery</li>
                <li>Assault</li>
                <li>Domestic Assault</li>
            </ul>
        ]
    },
    {
        title: "traffic tickets",
        description: [
            <p>Traffic tickets can cause major headaches for those on the receiving end, due to mandatory court appearances, potential increases in insurance premiums, and even the possibility of jail time for more serious tickets. The Law Office of Shin Cho is here for all traffic lawyer services. We will appear in court on your behalf, which means you will not need to waste your own time in traffic court. Additionally, we will make it our goal to resolve your traffic ticket so as to avoid any points against your license.</p>
        ]
    },
    {
        title: "personal injury",
        description: [
            <p>If you or a loved one have been injured as a result of someone else’s negligence, e.g., in a car accident or slip and fall, a personal injury attorney can help you recover compensation for your injuries. The Law Office of Shin Cho represents personal injury claimants and strives to maximize our clients’ compensation for their injuries.</p>
        ]
    }
    
]

export default About
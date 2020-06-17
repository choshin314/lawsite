import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import Layout from "../../components/Layout"
import HeroSection from "../../components/HeroSection.js"
import heroCrim from "../../images/heroCrim.jpeg"
import ContentSection from "../../components/ContentSection.js"
import {Button, Title} from "../../components/styledLib"
import FlexRow from "../../components/FlexRow"

const helmetData = {
    title: "Criminal Defense Overview",
    description: "Summary of the types of criminal charges that we defend our clients against in the St. Louis area, including DWI &amp; DUI, Drug Charges, and Violent Crimes." 
}

const CrimDefensePage = () => (
    <Layout helmetData={helmetData}>
        <main>
            <HeroSection
                    bgImage={heroCrim}
                    title="St. Louis Criminal Defense Attorney"
                    description="At the Law Office of Shin Cho, we strive to provide top-notch criminal defense representation to our clients in the St. Louis Metro Region at an affordable price.  No one should have to pay an arm and a leg just to have a fighting chance against criminal charges, and we understand that.  St. Louis criminal defense attorney, Shin Cho, has defended clients against countless criminal charges, ranging from the least serious misdemeanor offenses to the most severe felonies.  If you or a loved one have been accused of committing a crime, we’ve got your back.."
                    buttonText="Schedule Your Free Consultation"
            />
            <ContentSection>
                <Div>
                    <Title>CRIMINAL DEFENSE OVERVIEW</Title>
                    <p>Choosing the right criminal defense attorney is crucial to your defense; it is a decision that can impact the entire course of your case.  For persons who have been charged with a crime or are currently under investigation, their life, liberty and livelihood are all suddenly at risk.  Oftentimes, the defendant faces the possibility of jail or prison time and potentially exorbitant fines.  When the stakes are this high, it is imperative that you hire an attorney with the ability to find the weaknesses in the State’s case, and the experience and skills that you can rely on if the case proceeds to trial.</p>
                </Div>
                {crimTopics.map(({title, subtitles, description, button}, i) => (
                    <FlexRow title={title} subtitles={subtitles} borderBtm> 
                        {description}
                        {button && <Link to={button.path}><Button primary size="mediumFont">{button.text}</Button></Link>}
                    </FlexRow>
                ))}
            </ContentSection>
        </main>
    </Layout>
)

export default CrimDefensePage

const Div = styled.div`
    padding-bottom: 1.5em;
    border-bottom: var(--primary) 1px solid;
    margin-bottom: 1.5em;

    & p {
        line-height: 1.5;
    }
`

const crimTopics = [
    {
        title: "st. louis dwi lawyer",
        subtitles: ['Driving While Intoxicated', 'Driving Under the Influence'],
        description: [
            <p>Shin Cho has handled numerous DWI / DUI cases (“drunk driving” cases), so he knows that dealing with a DWI / DUI charge can be incredibly stressful for the driver. If the possibility of hefty fines, incarceration and a permanent criminal conviction showing up on a background check wasn’t bad enough, the driver also faces the possibility of suspension, sometimes even revocation, of their driver’s license. The combination of these possibilities can create a lot of uncertainty, especially for those who have responsibilities to family or loved ones, or for those seeking new employment.</p>,
            <p>At the Law Office of Shin Cho, we understand the severity of the situation, and scrutinize each and every DWI / DUI case under a microscope. There are numerous ways in which a seemingly “dead loser” of a case (e.g., where a breath test result is several times over the legal limit) can be transformed into a dismissal, reduced charge, or Not Guilty verdict. If you or a loved one has been charged with a DWI or DUI, call now to set up a free consultation with an experienced DWI lawyer.</p>
        ],
        button: {
            path: "/st-louis-dwi-lawyer",
            text: "About DUI & DWI"
        }
    },
    {
        title: "st. louis drug lawyer",
        subtitles: ['Possession of Controlled Substance', 'Delivery of Controlled Substance', 'Unlawful Possession of Paraphernalia'],
        description: [
            <p>St Louis Criminal Lawyer Shin Cho has personally seen to several drug charges being thrown out, after successfully arguing motions to suppress evidence obtained as a result of a warrantless search or seizure, or other constitutional violation. </p>,
            <p>A good defense attorney knows that the fight isn’t anywhere close to lost simply because the police find drugs / contraband / narcotics in a Client’s house, car, or even in his or her pockets.  St Louis Criminal Attorney Shin Cho is highly-skilled and experienced in looking deeper into the evidence to see if the drugs were found in violation of his Clients’ constitutional rights. </p>,
            <p>We represent clients in all misdemeanor or felony drug charges, including:</p>,
            <ul>
                <li>Possession of a Controlled Substance</li>
                <li>Possession with Intent to Distribute</li>
                <li>Distribution / Delivery of a Controlled Substance</li>
                <li>Unlawful Use or Possession of Drug Paraphernalia</li>
            </ul>
        ],
        button: {
            path: "/st-louis-drug-lawyer",
            text: "About Drug Crimes"
        }
    },
    {
        title: "st. louis theft lawyer",
        subtitles: ['Stealing', 'Receiving Stolen Property', 'Shoplifting / Petty Theft'],
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
        title: "st. louis violent crimes lawyer",
        subtitles: ['Assault', 'Domestic Assault', 'Homicide'],
        description: [
            <p>Prosecutors and judges take violent crimes the most seriously, and under Missouri law, certain crimes classified as “dangerous” offenses can carry harsher sentences.</p>,
            <p>But many people accused of violent offenses are truly innocent. Often the situation arose out of self-defense, accident, misidentification, false accusations or mental illness. Furthermore, it is important to hire an attorney with the skills necessary to ensure that the burden of proof remains on the State, and the presumption of innocence protects you or a loved one at all stages of the process. </p>,
            <p>We defend clients against violent crimes charges such as:</p>,
            <ul>
                <li>Murder</li>
                <li>Manslaughter</li>
                <li>Robbery</li>
                <li>Assault</li>
                <li>Domestic Assault</li>
            </ul>
        ]
    }
]
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import HeroSection from "../../components/HeroSection"
import img from "../../images/heroDrugs.jpeg"
import ContentSection from "../../components/ContentSection"
import FlexRow from "../../components/FlexRow"
import Accordion from "../../components/Accordion"
import {Title, Par} from "../../components/styledLib"

const helmetData = {
    title: "St. Louis Drug Lawyer",
    description: "Summary of drug charges including possession, delivery, manufacturing, and trafficking controlled substances, as well as paraphernalia-related offenses." 
}

const DrugCharges = () => (
    <Layout helmetData={helmetData}>
        <main>
            <HeroSection 
                bgImage={img}
                title="DRUG CHARGES"
                description="The Law Office of Shin Cho has defended numerous clients on the most serious drug charges involving possession or delivery of controlled substances, as well as minor drug paraphernalia tickets and marijuana charges.  If you have been charged with a drug offense in Missouri, rest assured that your case will be in good hands with us."
                buttonText="Contact Us"
            />
            <ContentSection >
                <div>
                    <Title>Drug Crimes Overview</Title>
                    <Par>
                    Drug charges can lead to serious penalties, including jail or prison sentences. These drug charges can haunt you for the rest of your life and create serious obstacles in your life if you are convicted. 
                    </Par>
                    <Par>
                    If you’ve been charged with possession of a controlled substance or any other drug charge, do not lose hope!  Be proactive and contact us right away to set up a consultation with an experienced criminal defense lawyer.  
                    </Par>
                </div>

            <FlexRow title="Drug Case Review Process" borderBtm>
                <StyledUL>
                    <li>Review for Suppression Issues</li>
                    <p>We review the evidence for potential constitutional violations. If the police found the drugs as a result of an unlawful search or seizure, WE CAN GET THE EVIDENCE THROWN OUT!  This means that even if you were in possession of controlled substances, we could force a dismissal if the police found the drugs as a result of an improper search or seizure.  This is one of the main reasons why you should never throw in the towel just because you think it’s a clear cut case.  You should always have a skilled criminal defense lawyer thoroughly review your case before making any decisions.</p>
                    <li>Review for General Strength of Case</li>
                    <p>We review the evidence for potential arguments that we can use at trial to beat the drug charge. An example of a good issue would be a situation involving multiple occupants in the vehicle or home where the drugs were found.  We can also call the credibility of the arresting officer(s) into question if there is evidence contradicting their claims.  Another potential issue is whether the “drugs” were properly lab tested. </p>
                    <p>There are many more potential issues to look for in a drug case, and we have the experience and skill necessary to find these weak points in the prosecutor’s case.</p>
                    <li>Negotiate with the Prosecutor</li>
                    <p>Sometimes negotiation is a good option, but it largely depends on how our review of the case shakes out.  If we have a strong defense or suppression argument, negotiation may not be the best route to take.  However, if we do need to secure a deal, there are plenty of options available to protect your interests in a drug case.  We can negotiate with the prosecuting attorney for the best possible deal, which can include reducing the drug charges to lesser offenses, alternative court programs such as drug court, or probation.   </p>
                    <li>Contested Hearings and/or Trial</li>
                    <p>If we cannot get a satisfactory deal through negotiations, we can take the fight to them and proceed to contested motion hearings and/or trial on the drug charges.</p>
                </StyledUL>
                </FlexRow>
                <FlexRow title="Types of Drug Offenses" borderBtm>
                    <p>The three most common types of drug charges are possession of a controlled substance, delivery of a controlled substance, and unlawful possession of drug paraphernalia.  If you have been charged with any of these drug offenses, the Law Office of Shin Cho is here to help.  <a href="tel:+13143121228">Call today</a> to schedule a consultation with a dedicated, experienced <Link to="/about">St. Louis criminal defense attorney.</Link></p>

                    <AccordionContainer>
                        <Accordion title="Unlawful Possession of Drug Paraphernalia" light>
                            <p>In Missouri, Unlawful Possession of Drug Paraphernalia is a Class D Misdemeanor for first timers, but it can be bumped up to a Class A Misdemeanor on the second or subsequent offense.  While possession of paraphernalia is a relatively minor offense, you usually won’t get charged with this without also getting charged with possession of controlled substance.</p>
                        </Accordion>
                        <Accordion title="Possession of a Controlled Substance" light>
                            <Par>Drug possession charges can vary quite a bit in severity, depending on whether the drug charge is for marijuana possession or possession of some other drug.  It also depends on whether you have prior drug offenses on your record. </Par>
                            <Par><BoldSpan>Let's talk about marijuana possession first: </BoldSpan>Assuming that it’s a first offense, possession of marijuana (less than 10 grams) is a class D misdemeanor, which is a non-jailable offense.  Possession of marijuana (between 10 and 35 grams) can be charged as a class A misdemeanor.  Lastly, marijuana possession involving more than 35 grams is a class D felony.</Par>
                            <Par><BoldSpan>Synthetic cannabinoids follow marijuana rules: </BoldSpan>The same charging scheme for marijuana possession also applies to possession of synthetic cannabinoids.</Par>
                            <Par><BoldSpan>Drug possession (all other controlled substances):  </BoldSpan>Possession of controlled substances for any other drug is a class D felony, regardless of the quantity.</Par>
                        </Accordion>
                        <Accordion title="Delivery of a Controlled Substance" light>
                            <Par>Delivery of a Controlled Substance is the catch-all name for the following offenses:</Par>
                            <BasicOL>
                                <li>Distributing or delivering a controlled substance</li>
                                <li>Attempted distribution or delivery of a controlled substance</li>
                                <li>Possession with intent to distribute or deliver a controlled substance</li>
                                <li>Permitting a minor to purchase or transport illegally obtained controlled substances</li>
                            </BasicOL>
                            <Par>In most cases, delivery of a controlled substance will be charged as a Class C Felony, which carries some serious potential consequences.  This applies for any delivery or possession with intent to deliver that involves ANY amount of any drug other than marijuana (cocaine, heroin, methamphetamine, prescription drugs), and also includes delivery or distribution of more than 35 grams of marijuana.</Par>
                            <Par>Delivery of marijuana 35 grams or less will be charged as a Class E Felony, which is not quite as severe as a Class C.  In either situation, we would strongly advise that you contact an experienced <Link to="/about">St. Louis drug crime lawyer</Link> if you have charges for delivery of controlled substances. </Par>
                        </Accordion>
                    </AccordionContainer>
                </FlexRow>
            </ContentSection>
        </main>
    </Layout>
)


const StyledUL = styled.div`
    list-style-type: none;
    & li::before {
        content: "   ";
        background: var(--accent);
        width: 1rem;
        height: 1rem;
        border-radius: 3px;
        display: inline-block;
        line-height: 2rem;
        color: white;
        text-align: center;
        margin-right: 0.5rem;
    }
    & li {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--primary);
        margin-bottom: 1em;
    }
    & p {
        margin: 0 0 1em 1.5rem;
        font-weight: 500;
    }
`

const AccordionContainer = styled.div`
    padding: 0 3%;
`
const BoldSpan = styled.span`
    font-weight: 600;
`

const BasicOL = styled.ol`
    margin-bottom: 1em;
`

export default DrugCharges
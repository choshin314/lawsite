import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import {Link} from "gatsby"
import HeroSection from "../components/HeroSection"
import heroDWI from "../images/heroDWI.jpeg"
import ContentSection from "../components/ContentSection"
import Accordion from "../components/Accordion"
import {Title, Par} from "../components/styledLib"

const helmet = {
    title: "St. Louis DWI Attorney",
    description: "St. Louis DWI attorney addresses four common questions about DUI &amp; DWI charges in Missouri. Call us today for a free consultation with a DWI attorney!" 
}

const DWIPage = () => (
    <Layout helmetData={helmet}>
        <main>
            <HeroSection
                bgImage={heroDWI}
                title="DUI / DWI ATTORNEY ST. LOUIS"
                description="If you’ve been arrested for Driving While Intoxicated (DWI) or Driving Under the Influence (DUI), it is of vital importance that you obtain legal representation to fight both the criminal charges (i.e., the actual DWI charge) and the administrative action against your driver license (i.e., license suspension or revocation).  At the Law Office of Shin Cho, your case will be in good hands with a top-rated St. Louis DUI lawyer.  We will guide you through the ins and outs of both sides of the DUI / DWI case, and we’ll fight for the best possible outcome."
                buttonText="Contact Us"
            />
            <ContentSection>
                <Title>4 Common Questions About DUI & DWI Charges</Title>
                    <Par>In almost all St. Louis DWI / DUI cases, a DWI / DUI arrest will create two separate headaches for the accused: First, you have the criminal charge for Driving While Intoxicated (DWI) or Driving Under the Influence (DUI) that you have to contend with in criminal court or municipal court.  A first-time DWI or DUI charge will be charged as a class B misdemeanor in Missouri state courts.</Par>
                    <Par>On top of that, you will simultaneously have to deal with the driver’s license suspension or driver’s license revocation action brought against you by the Missouri Department of Revenue.  The DWI or DUI charge and the administrative action are two independent cases, each with their own set of rules and potential penalties.</Par>
                    <Par>As you can imagine, this can all get quite confusing and stressful.  With this in mind, we address the most common questions about DUI and DWI cases below. </Par>
                <Accordion title="1. DUI vs. DWI: What's the difference?" >
                    <Par>The short answer is not a whole lot.  In Missouri, Driving Under the Influence (DUI) and Driving While Intoxicated (DWI) are consolidated into one criminal offense under the same <a href="https://law.justia.com/codes/missouri/2018/title-xxxviii/chapter-577/section-577.010/">criminal statute.</a>  The confusion comes from the fact that each individual state has its own set of laws, where some refer to the offense as DUI, others DWI, and still others call it OUI or OWI (operating under the influence or operating while intoxicated).</Par>
                    <Par>At the end of the day, whether you are arrested for driving while intoxicated from alcohol, driving under the influence of a controlled substance, or a combination of the two, the resulting charge in Missouri will be filed as Driving While Intoxicated (DWI).  If you have been charged with DWI, you should consult an experienced St. Louis DWI attorney right away.  Contact us today for a free consultation.</Par>
                </Accordion>
                <Accordion title="2. What is the penalty for a DWI / DUI charge?" >
                    <Par>Under Missouri law, the maximum sentence for DWI depends on whether it’s a DWI First Offense or the number of prior offense DWIs one has on their record.  DWI 1st Offense is charged as a class B misdemeanor in state court, which means that it is punishable by up to 180 days in the county jail and a $1000 fine.  First-time DWI charges can also be filed in municipal courts, where they are punishable by 3 to 6 months in the county jail, depending on how the municipal ordinance is written.</Par>
                    <Par>If you have a prior DWI conviction or guilty plea and get charged with a second DWI within five years, you can be charged as a DWI Prior Offender, which would enhance the DWI charge to a class A misdemeanor.  As an added penalty, there is a mandatory minimum 10 days in jail even if you get probation.  Additional enhancements apply to DWI Persistent Offenders (2 prior DWIs), DWI Aggravated Offenders (3 prior DWIs), DWI Chronic Offenders (4 prior DWIs), and DWI Habitual Offenders (5 prior DWIs).</Par>
                    <Par>It is important to retain a <Link to="/about">skilled, experienced St. Louis DWI attorney</Link> to defend you if you are charged with DWI, so that you can be sure that your case is in capable hands.  Even if it’s a DWI first offense and they are offering probation, you should not simply plead guilty without doing a thorough review of the case for better options.</Par>
                </Accordion>
                <Accordion title="3. What happens to my driver’s license if I was arrested for DUI / DWI?" >
                    <Par>This is where things get a bit complicated, because there are actually two sides to a Missouri DWI case.  In the vast majority of Missouri DWI cases, you will have two separate “cases” that can each affect your Missouri driver’s license: (1) the criminal charge of Driving While Intoxicated, filed by the prosecuting attorney in criminal court, and (2) the Department of Revenue’s administrative suspension or revocation of your license.</Par>
                    <ParSubheading>What does a DWI conviction do to my driver's license?</ParSubheading>
                    <Par>If you get a DWI conviction on your record, that conviction does not just go on your criminal record.  It also gets reported to the Department of Revenue (DOR), which oversees the Driver’s License Bureau and maintains driving records.  A DWI conviction will put eight points against your driver’s license, which will result in an automatic driver’s license suspension.  For first convictions, this will be a 90 day suspension of driving privileges (eligible for a restricted driving privilege after the first 30 days), after which you can get your driver’s license reinstated.  However, license reinstatement is not automatic; you would need to satisfy a number of <a href="https://dor.mo.gov/drivers/reinstatement.php">conditions</a> before getting your license back.</Par>
                    <Par>Multiple DWI convictions will result in additional penalties, ranging from one-year revocations of your driver’s license to five or even ten-year license denials.</Par>
                    <Par>If you have been charged with DWI, whether it’s your first time or a subsequent offense, you should contact a DWI attorney to go over your options immediately.  DWI law has many nuances that an untrained eye may not be able to see, and oftentimes these subtleties can mean all the difference in how a DWI case plays out.</Par>
                    <ParSubheading>What are the administrative sanctions related to DWI arrests?</ParSubheading>
                    <Par>In most DWI arrests in St. Louis and throughout Missouri, a police officer will ask (or tell) you to submit to a breathalyzer test or provide a blood sample after you have been placed under arrest.  This is for the purpose of testing your BAC, or blood alcohol concentration.</Par>
                    <Par>If you do provide a breath or blood sample and the BAC result comes in over the legal limit, the Department of Revenue will suspend your driver’s license for 90 days or revoke your license for one year if you have a prior conviction within the past five years.  If you refuse to submit to the breathalyzer or blood draw, your driver’s license will be revoked for one year.</Par>
                    <Par>It’s important to note that these administrative suspensions or revocations are independent from the criminal DWI charge.  To illustrate this point, consider the following example: </Par>
                    <Example>Bob is arrested for DWI. When asked to blow into the breathalyzer, Bob tells the officer where he can shove said breathalyzer.  Bob is charged with DWI, and also receives notice from the Dept. of Revenue that his license has been revoked for a year for refusing to take the test.  In the criminal case, the prosecutor dismisses all DWI charges on National DWI Forgiveness Day (not a real thing), including Bob’s.  While this would be great for Bob, the dismissal of this DWI charge would not cancel the Dept. of Revenue’s revocation of his license because it is independent of the outcome of the criminal charge.  </Example>
                    <Par>It’s even more important to note that these administrative actions can be challenged and overturned.  You must act quickly to initiate the appeal or challenge to refusal revocations (within 30 days) and BAC suspensions (15 days), or else you will permanently lose the opportunity to do so.  If you have been arrested for DWI and are facing a driver’s license suspension or revocation, <Link to="/contact">contact St. Louis DWI attorney Shin Cho today</Link> to discuss your options.</Par>
                </Accordion>
                <Accordion title="4. Do I have to take the field sobriety tests?" >
                    <Par>If you are pulled over and the officer suspects that you have been driving under the influence or driving while intoxicated, they will ask you to step out of the vehicle and perform some field sobriety tests.  There are three standardized field sobriety tests:</Par>
                    <List>
                        <li>Horizontal Gaze Nystagmus – the officer will tell you to stand still and follow her finger, pen, or other object with your eyes. </li>
                        <li>Walk and Turn – the officer will instruct you to imagine a straight line and “walk the line,” turn, and walk back while touching heel to toe on each step. </li>
                        <li>One Leg Stand – the officer will have you raise one leg and stand on the other, while counting out loud until told to stop. </li>
                    </List>
                    <Par>There are also a variety of non-standardized tests that an officer may administer when investigating a possible DWI, such as counting (e.g., “count backwards from 99 to 85”) and reciting the alphabet backwards or forwards. </Par>
                    <Par>Most people feel they have no choice but to perform these tests, either because the way the officer asks them to do the tests or simply because they believe they are required by the law to do so.  This is NOT correct – you are not required to submit to these field sobriety tests, and in most cases, it is not a good idea to do them.  However, it is also very important that if you do not wish to take the tests, you should decline to do so in a polite and respectful manner (read: not belligerently!).  </Par>
                </Accordion>
            </ContentSection>
        </main>
    </Layout>
)

export default DWIPage

const List = styled.ol`
    font-weight: 600;
    padding-bottom: 1em;
`

const ParSubheading = styled.h4`
    text-decoration: underline;
    font-size: 1.1em;
`
const Example = styled(Par)`
    padding: 0 2% 1em 2%;
    font-style: italic;
`
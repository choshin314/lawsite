import React from "react"
import styled, {css} from "styled-components"
import Layout from "../components/Layout.js"
import HeroSection from "../components/HeroSection.js"
import heroTraffic from "../images/heroTraffic.jpeg"
import ContentSection from "../components/ContentSection"
import Accordion from "../components/Accordion"

import {Title, Par} from "../components/styledLib"

const helmetData = {
    title: 'St. Louis Traffic Lawyer',
    description: "St. Louis traffic ticket lawyer Shin Cho fixes tickets in St. Louis County, City, and the surrounding areas. Affordable rates & excellent results for all types of traffic tickets!"
}

function Traffic() {
    
    return (
        <>
        <Layout helmetData={helmetData} >
            <HeroSection 
                bgImage={heroTraffic}
                title="ST. LOUIS TRAFFIC TICKET LAWYER"
                description="Traffic tickets can result in “points” against your driver’s license, raising insurance premiums, or automatic license suspensions or revocations.  If you have been pulled over and received a traffic ticket for a traffic violation, having an experienced St. Louis traffic ticket lawyer can save you the headache and the expense of dealing with these potential issues.  The Law Office of Shin Cho has assisted countless drivers in getting their traffic tickets amended or reduced to non-moving violations (“no-point” violations that do not affect your driving record).  We have also helped many folks get their driver’s license reinstated after months or years of having their driver’s license suspended or revoked."
                buttonText="Contact Us"
            />    
            <ContentSection>
                <div>
                    <Title color="primary">{accordionReasons.length} Reasons to Hire a Traffic Ticket Attorney</Title>

                    {accordionReasons.map(({title, content}) => (
                        <Accordion key={title} title={title} >{content()}</Accordion>
                    ))}

                    <div>
                        <Par margin="1em 0">
                        This is where the value of an experienced St. Louis traffic ticket lawyer comes in.  Rather than simply taking a conviction for the original charge, we can negotiate with the prosecuting attorney to resolve the case in a way that avoids points against your license and keeps your driving record clean.  This means the insurance company won’t hear a peep about your traffic ticket, and your license will not be put in jeopardy.  You also won’t need to worry about dealing with the stress and inconvenience of having to go to court, because our traffic ticket defense attorney will appear in court on your behalf.
                        </Par>
                        <Par>
                        The Law Office of Shin Cho has you covered for every type of traffic ticket in St. Louis County, St. Louis City, St. Charles County, and Jefferson County, including:   
                        </Par>
                        <List>
                            <li>Speeding Tickets</li>
                            <li>Stop Sign Violations</li>
                            <li>Electric Signal Violations (Red Light Violations)</li>
                            <li>Driving Without Inusrance (Failure to Maintain Financial Responsibility)</li>
                            <li>Driving While Suspended</li>
                            <li>Driving While Revoked</li>
                            <li>Driving in a Careless and Imprudent Manner</li>
                            <li>Leaving the Scene of An Accident (Hit and Runs)</li>
                            <li>Failure to Signal</li>
                            <li>Failure to Yield</li>
                            <li>Improper Signal</li>
                            <li>Improper Turn</li>
                        </List>
                        <Par>
                        The experienced St. Louis Traffic Ticket Lawyers at Law Office of Shin Cho know just how quickly these traffic tickets can add up, and the importance of avoiding convictions for moving violations.  As we discussed above, traffic tickets for moving violations can often result in points being assessed against your driver’s license, thereby increasing your auto insurance premiums and the risk of suspension or revocation of your driver’s license.
                        </Par>
                        <Par>
                        Our goals as a premier source for St. Louis traffic ticket defense attorney services are simple:
                        </Par>
                        <List>
                            <li>Avoid points against your driver's license</li>
                            <li>Avoid any increase in insurance premiums</li>
                            <li>Eliminate or minimize court fines</li>
                            <li>Avoid jail time</li>
                        </List>
                        <Par margin="1em 0">
                        If you need a St. Louis traffic ticket lawyer who can help you effectively and at an affordable rate, the Law Office of Shin Cho is here to help.  Clients throughout the St. Louis, MO area turn to our firm because we have a proven record of excellence in traffic ticket defense.  We handle traffic tickets in St. Louis County and the surrounding counties; see below for all of the traffic courts that we go to in the Greater St. Louis area.  We devote personal attention to every case, so contact us today to get started. 
                        </Par>
                    </div>

                    {courts.map(({title, content}) => (
                        <Accordion key={title} title={`${title.toUpperCase()} TRAFFIC TICKET LAWYER`} >{content()}</Accordion>
                    ))}
                </div>
            </ContentSection>
        </Layout>
        </>
    )

}

const List = styled.ul`
    margin-bottom: 1em;
    &:last-child {
        margin-bottom: 0;
    }
`

const PlainList = styled(List)`
    list-style-type: none;
`

const accordionReasons = [
    {
        title: "1. You do NOT want to lose your license because of points!",
        content: () => (
            <>
            <Par>The first reason why you may want to hire a traffic defense lawyer is to avoid the assessment of points against your driver’s license.  By simply paying the fine that is listed on your traffic ticket, you are agreeing to plead guilty to the traffic violation “as charged” and take a conviction.  This conviction gets reported to the Missouri Department of Revenue, which then assesses points against your driver’s license.   This doesn’t sound like a big deal, until you realize that your license will be automatically suspended or revoked if you accumulate too many points.</Par>
            <Par>Per the Missouri Department of Revenue, if you accumulate a total of 8 or more points in 18 months, the Department of Revenue will suspend your driving privilege.</Par>
            <List>
                <li>1st Suspension – 30 days</li>
                <li>2nd Suspension – 60 days</li>
                <li>3rd Suspension – 90 days</li>
            </List>
            <Par>The Department of Revenue will revoke your driving privilege for one year if you accumulate:</Par>
            <List>
                <li>12 or more points in 12 months</li>
                <li>18 or more points in 24 months</li>
                <li>24 or more points in 36 months</li>
            </List>
            <Par>Now, you may be thinking, “Okay, but there’s no way I’m going to get 8 points!”  Most minor traffic violations (speeding, failure to signal, improper lane use, etc.) are 2- or 3-point violations apiece, while other traffic tickets carry even more points (driving without insurance, driving while suspended, careless & imprudent driving).  It’s best to avoid the risk of losing your license, as points can add up a lot faster than expected.  If you have received a traffic ticket, look no further than the Law Office of Shin Cho for your traffic ticket defense.  Hiring a good St. Louis traffic ticket attorney will ensure that your driver’s license is protected, and prevent the assessment of points against your driver’s license.</Par>    
            </>
        )
    },
    {
        title: "2. You do NOT want your insurance premiums to go up because of your traffic tickets!",
        content: () => (
            <>
            <Par>The more traffic violations you have on your driving record, the higher your auto insurance premiums will go.  On average, in the State of Missouri, insurance rates will increase by about <a href="https://www.carinsurance.com/how-much-insurance-goes-up-for-speeding-ticket.aspx">10% per speeding ticket</a>.  To put that in dollar figures, that averages out to about $125 more that you’ll be forking over to the insurance company every policy period.  Not to mention, if you previously had a “safe driver discount” for having a clean driving record, you can count on losing that as well.  </Par>
            <Par>Call us today to speak to a traffic ticket defense attorney and keep your insurance rates down!</Par>
            </>
        )
    },
    {
        title: "3. You DO want to preserve your clean driving record, to protect yourself in the future",
        content: () => (
            <>
            <Par>In addition to the reasons laid out in sections 1 and 2, you want to keep a clean driving record in case you ever get another traffic ticket.  Oftentimes when dealing with a prosecutor for one of the many municipalities in St. Louis County, we have to provide a copy of our client’s driving record as part of the negotiation process.  Your driving history is taken into account by the traffic prosecutor when he or she is considering whether they will agree to amend the traffic ticket to a no-point infraction.</Par>
            <Par>For this reason, it is important to keep your driving record clean at all times.  The decision to hire an experienced St. Louis traffic ticket attorney to handle your ticket will pay dividends in the future by ensuring that you always have the best chance of securing favorable dispositions in future traffic tickets.</Par>
            </>
        )
    }
]

const courts = [
    {
        title: "jefferson county",
        content: () => (
            <>
            <Par>If you received a speeding ticket or other traffic ticket in Jefferson County, your ticket will most likely be sent to one of the courts below.  We handle traffic tickets in each of these traffic courts, so don’t hesitate to call if you need effective traffic law representation at a low rate!</Par>
            <List>
                <li>Arnold Municipal Court</li>
                <li>Crystal City Municipal Court</li>
                <li>Festus Municipal Court</li>
                <li>Herculaneum Municipal Court</li>
                <li>Hillsboro Municipal Court</li>
                <li>Jefferson County Municipal Court</li>
                <li>Pevely Municipal Court</li>
            </List>
            </>
        )
    },
    {
        title: "st. charles county",
        content: () => (
            <>
            <Par>Traffic tickets issued in St. Charles County are sent to either the St. Charles County Circuit Court or the municipal court for the city in which the ticket was issued.  We represent clients with tickets in these traffic courts:</Par>
            <ul className="margin-top10">
                <li>Dardenne Prairie Municipal Court</li>
                <li>Lake St. Louis Municipal Court</li>
                <li>O’Fallon Municipal Court</li>
                <li>St. Charles County Circuit Court Associate Division</li>
                <li>St. Charles County Municipal Court</li>
                <li>St. Charles City Municipal Court</li>
                <li>St. Peters Municipal Court</li>
                <li>Wentzville Municipal Court</li>
            </ul>
            </>
        )
    },
    {
        title: "st. louis county",
        courts: [
            'St. Louis County Circuit Court Associate Division',
            'St. Louis County Municipal Court North Division',
            'St. Louis County Municipal Court South Division',
            'St. Louis County Municipal Court West Division',
            'Ballwin Municipal Court',
            'Bel-Nor Municipal Court',
            'Bel-Ridge Municipal Court',
            'Bella Villa Municipal Court',
            'Bellefontaine Neighbors Municipal Court',
            'Bellerive Acres Municipal Court',
            'Berger Municipal Court',
            'Berkeley Municipal Court',
            'Beverly Hills Municipal Court',
            'Black Jack Municipal Court',
            'Breckenridge Hills Municipal Court',
            'Brentwood Municipal Court',
            'Bridgeton Municipal Court',
            'Calverton Park Municipal Court',
            'Charlack Municipal Court',
            'Chesterfield Municipal Court',
            'Clarkson Valley Municipal Court',
            'Clayton Municipal Court',
            'Cool Valley Municipal Court',
            'Crestwood Municipal Court',
            'Creve Coeur Municipal Court',
            'Dellwood Municipal Court',
            'Des Peres Municipal Court',
            'Edmundson Municipal Court',
            'Ellisville Municipal Court',
            'Eureka Municipal Court',
            'Fenton Municipal Court',
            'Ferguson Municipal Court',
            'Flordell Hills Municipal Court',
            'Florissant Municipal Court',
            'Frontenac Municipal Court',
            'Glendale Municipal Court',
            'Grantwood Village Municipal Court',
            'Greendale Municipal Court',
            'Hazelwood Municipal Court',
            'Jennings Municipal Court',
            'Kirkwood Municipal Court',
            'Ladue Municipal Court',
            'Lakeshire Municipal Court',
            'Manchester Municipal Court',
            'Maplewood Municipal Court',
            'Marlborough Municipal Court',
            'Maryland Heights Municipal Court',
            'Moline Acres Municipal Court',
            'Normandy Municipal Court',
            'Northwoods Municipal Court',
            'Oakland Municipal Court',
            'Olivette Municipal Court',
            'Overland Municipal Court',
            'Pagedale Municipal Court',
            'Pasadena Hills Municipal Court',
            'Richmond Heights Municipal Court',
            'Riverview Municipal Court',
            'Rock Hill Municipal Court',
            'Shrewsbury Municipal Court',
            'St. Ann Municipal Court',
            'St. John Municipal Court',
            'Sunset Hills Municipal Court',
            'Town and Country Municipal Court',
            'University City Municipal Court',
            'Valley Park Municipal Court',
            'Velda City Municipal Court',
            'Vinita Park Municipal Court',
            'Warson Woods Municipal Court',
            'Webster Groves Municipal Court',
            'Weldon Spring Municipal Court',
            'Wellston Municipal Court', 
            'Wildwood Municipal Court', 
            'Winchester Municipal Court', 
            'Woodson Terrace Municipal Court'
        ],
        content: () => (
            <>
            <Par>If you need a traffic ticket lawyer in St. Louis County, we have you covered.  The Law Office of Shin Cho provides traffic ticket lawyer services for tickets and warrants in these St. Louis County traffic courts:</Par>
            <List>
                {courts[2].courts.map(court => (<li>{court}</li>))}
            </List>
            </>
        )
    },
    {
        title: "st. louis city",
        content: () => (
            <>
            <Par>
                If you received a speeding ticket or other traffic ticket in St. Louis City, your ticket will most likely be sent to the St. Louis City Municipal Court (a.k.a. St. Louis City Traffic Court).  The St. Louis City Traffic Court address is:
            </Par>
            <PlainList>
                <li>St. Louis City Municipal Court</li>
                <li>1520 Market Street</li>
                <li>St. Louis, MO 63103</li>
            </PlainList>
            <Par>
                Our traffic ticket attorneys frequently handle cases in the city, and we are ready to help you with your St. Louis City traffic ticket at an affordable price, with no court appearance required.  Call us today to discuss your St. Louis City traffic ticket.
            </Par>
            </>
        )
    }
]

export default Traffic
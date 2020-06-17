import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import HeroSection from "../../components/HeroSection"
import img from "../../images/heroCrim.jpeg"
import ContentSection from "../../components/ContentSection"
import FlexRow from "../../components/FlexRow"
import {Title, Par} from "../../components/styledLib"

const helmetData = {
    title: "Minor in Possession (MIP) Charges",
    description: "Getting an MIP, MIC (Minor in Consumption), or MVI (Minor Visibly Intoxicated) ticket can cause a giant headache if not dealt with correctly. If you have been charged with Minor in Possession of Alcohol, read up on MIP here."
}
const MinorInPossession = () => (

    <Layout helmetData={helmetData}>
        <main>
            <HeroSection
                title="Minor in Possession Charges (MIP)"
                description="Law enforcement officers in St. Louis are always on the lookout for underage drinking, issuing numerous citations for Minor in Possession (MIP) every month.  These days, MIP citations will be issued not just for possessing alcohol – you can also receive a St. Louis Minor in Possession ticket for attempting to buy alcohol, being visibly intoxicated as a minor, or simply for drinking while underage (consuming alcohol as a minor).  If you have been charged with MIP, call us today to discuss your options."
                buttonText="Consult an Attorney"
                bgImage={img}
            />
            <ContentSection>
                <div>
                    <Title >LET US HELP YOU AVOID A MINOR IN POSSESSION CONVICTION</Title>
                    <Par>If you have a Minor in Possession ticket and do not wish to take a permanent conviction and/or lose your license, contact us today to speak to an experienced St. Louis Minor In Possession Lawyer.  The Law Office of Shin Cho has handled numerous MIP tickets and helped our clients avoid MIP conviction, keep their license, and keep their record clean.</Par>
                </div>
                
                <FlexRow title="What is Minor in Possession?" borderBtm>
                    <Par margin="0">Under <a href="https://law.justia.com/codes/missouri/2018/title-xx/chapter-311/section-311.325/">Missouri law</a>, you can be charged with Minor in Possession for any of the following situations:</Par>
                    <List>
                        <li>Purchasing or attempting to purchase alcohol as a minor under 21 years of age.</li>
                        <li>Minor in possession of alcoholic beverage (the most typical example of “minor in possession”).  You can get a St. Louis Minor in Possession citation even if the alcoholic beverage is unopened.</li>
                        <li>Minor visibly intoxicated (also known as MVI).  You can get cited for MIP if the police officer has reason to believe that you are intoxicated, even if you aren’t in possession of an alcoholic beverage container.</li>
                        <li>Minor with a blood alcohol content of more than two-hundredths of one percent or more by weight of alcohol (i.e., when a minor takes a breathalyzer test and blows over .02).  This is a very, very small amount of alcohol – typically much less than what would be required to be intoxicated.  For this reason, this type of MIP is sometimes known as Minor in Consumption.</li>
                    </List>
                </FlexRow>
                <FlexRow title="Penalties for MIP" borderBtm>
                    <Par margin="0">In Missouri, a first-time MIP is classified as a Class D Misdemeanor in the state courts.  Additionally, if you plead guilty to or are convicted of MIP, your <a href="https://dor.mo.gov/drivers/dwiinfo.php#minor">driver’s license may be suspended</a> for 30 days on the first offense.</Par>
                    <Par margin="0">Multiple MIP charges on your record will result in harsher penalties as well.  A second or subsequent Minor in Possession charge will be classified as a Class A Misdemeanor.  This is the most severe level of misdemeanor offense, and carries up to one year in jail and $2000 in fines.</Par>
                    <Par margin="0">The penalties against your driver’s license will also increase with multiple Minor in Possession charges.  A second MIP conviction will result in a 90 day suspension, and a third MIP conviction will result in a one year revocation of your driver’s license.</Par>
                </FlexRow>
            </ContentSection>
        </main>
    </Layout>
)


export default MinorInPossession

const List = styled.ul`
    & li {
        margin-bottom: .5em;
    }
`
import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const Footer = () => (
    <FooterWrapper>
        <FooterNav>
            <StyledLink to="/" ><li>HOME</li></StyledLink>
            <StyledLink to="/criminal-defense" ><li>CRIMINAL DEFENSE</li></StyledLink>
            <StyledLink to="/st-louis-dwi-lawyer" ><li>DWI DEFENSE</li></StyledLink>
            <StyledLink to="/st-louis-traffic-lawyer"><li>TRAFFIC LAW</li></StyledLink>
            <StyledLink to="/about"><li>ATTORNEY BIO</li></StyledLink>
            <StyledLink to="/client-reviews"><li>CLIENT REVIEWS</li></StyledLink>
            <StyledLink to="/contact"><li>CONTACT US</li></StyledLink>
        </FooterNav>
        <BottomTag>
            <p>Copyright © 2017 Shin Cho, Attorney at Law, LLC, St. Louis Criminal Lawyer</p>
            <p>Principal Office: 3245 Lemay Ferry Rd, St. Louis, MO 63125 | 314.312.1228</p>
        </BottomTag>
        <Disclaimer>
            <p>The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</p>
        </Disclaimer>   
        <p></p>         
    </FooterWrapper>
)


export default Footer

const FooterWrapper = styled.footer`
    background-color: var(--dark);
    color: var(--white);
    padding-top: 2rem;
`

const FooterNav = styled.ul`
    width: 80%;
    max-width: 960px;
    font-size: 1.2rem;
    text-align: center;
    list-style-type: none;
    display: grid;
    gap: 10px;
    padding: 0;
    margin: 0 auto 1rem auto;
    grid-template-columns: 1fr;

    @media(min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 981px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
    grid-column: ${props => props.gridColumn};
    font-weight: 700;
    position: relative;
    &::after {
                content: "";
                position: absolute;
                bottom: -2px;
                left: 0;
                right: 0;
                border-bottom: var(--accent) 2px solid;
                transform: scaleX(0);
                transform-origin: left;
                transition: transform .35s ease-in-out;
            }

    & li {
        margin: auto 2%;
    }
    &:hover, &:focus {
        color: var(--accent);
        &::after {
            transform: scaleX(1);
        }
    }
`

const BottomTag = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 2rem auto;
    color: var(--white);
    text-align: center;
    line-height: 1.5;
    letter-spacing: .5px;
`

const Disclaimer = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    padding-bottom: 2rem;
    font-size: .8rem;
`


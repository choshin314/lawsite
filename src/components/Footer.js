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
            <StyledLink to="/st-louis-personal-injury-lawyer"><li>PERSONAL INJURY</li></StyledLink>
            <StyledLink to="/about"><li>ATTORNEY BIO</li></StyledLink>
            <StyledLink to="/client-reviews"><li>CLIENT REVIEWS</li></StyledLink>
            <StyledLink to="/contact"><li>CONTACT US</li></StyledLink>
        </FooterNav>
        <Disclaimer>
            <p>The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</p>
        </Disclaimer>            
    </FooterWrapper>
)


export default Footer

const FooterWrapper = styled.footer`
    background-color: var(--dark);
    color: var(--white);
    padding-top: 15px;
`

const FooterNav = styled.ul`
    font-size: 1.2rem;
    text-align: center;
    list-style-type: none;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    margin-bottom: 10px;

    @media(min-width: 981px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
    grid-column: ${props => props.gridColumn};
    font-weight: 700;

    & li {
        margin: auto 2%;
    }

    &:hover, &:active {
        color: var(--cream);
        font-weight: 900;
    }
`

const Disclaimer = styled.div`
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    padding: 2em 0;
    text-align: center;
`


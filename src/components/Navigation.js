import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import Hamburger from './Hamburger.js'
import Toggler from "./Toggler.js"
import logo from "../images/Logo.png"
import { faAngleDown } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() (

    <Toggler>
    {(isOpen, setIsOpen) => (
        <Nav>
            <Link to="/"><img className="logo" src={logo} alt="Law Office of Shin Cho Logo"/></Link>
            <NavList>
                <NavListItem><Link to="/">HOME</Link></NavListItem>
                <NavListItem onClick={() => setIsOpen(prev => !prev)} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                    CRIMINAL DEFENSE
                    <FontAwesomeIcon icon={faAngleDown} />
                    <SubMenu isOpen={isOpen}>
                        <SubMenuItem><Link to="/criminaldefense">CRIMINAL DEFENSE OVERVIEW</Link></SubMenuItem>
                        <SubMenuItem><Link to="/criminaldefense/st-louis-drug-lawyer">DRUG CHARGES</Link></SubMenuItem>
                        <SubMenuItem><Link to="/st-louis-dwi-lawyer">DUI / DWI CHARGES</Link></SubMenuItem>
                        <SubMenuItem><Link to="/criminaldefense/felony-charges">FELONY CHARGES</Link></SubMenuItem>
                        <SubMenuItem><Link to="/criminaldefense/misdemeanor-charges">MISDEMEANOR CHARGES</Link></SubMenuItem>
                        <SubMenuItem><Link to="/criminaldefense/minor-in-possession">MINOR IN POSSESSION</Link></SubMenuItem>
                        <SubMenuItem><Link to="/criminaldefense/ranges-of-punishment">RANGES OF PUNISHMENT FOR CRIMES</Link></SubMenuItem>
                    </SubMenu>
                </NavListItem>
                <NavListItem><Link to="/st-louis-dwi-lawyer">DWI DEFENSE</Link></NavListItem>
                <NavListItem><Link to="/st-louis-traffic-lawyer">TRAFFIC LAW</Link></NavListItem>
                <NavListItem><Link to="/st-louis-personal-injury-lawyer">PERSONAL INJURY</Link></NavListItem>
                <NavListItem><Link to="/about">ATTORNEY BIO</Link></NavListItem>
                <NavListItem><Link to="/client-reviews">CLIENT REVIEWS</Link></NavListItem>
                <NavListItem><Link to="/contact">CONTACT US</Link></NavListItem>
            </NavList>
            <Hamburger />
        </Nav>
    )}

    </Toggler>
)

export default Navigation

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    padding: 20px;
    background-color: #f7f9ff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    box-shadow: 0px 2px 50px 0px #201c44;
    transition: all .2s ease-in-out;

    & > a {
        flex: 1 0 10rem;
        padding-right: 3%;
        align-self: center;;
    }
    
    & > a > img {    
        height: 3rem;
        border: #201c44 solid .5px;
        border-radius: 3px;
    }

    @media (min-width: 768px) {
        & {padding: 20px 10% 20px 10%;}
    }
    
    @media (min-width: 981px) {
        & {
            padding: 20px;
        }
    }
  `

const NavList = styled.ul`
    width: 100%;
    list-style-type: none;
    display: none;
    padding-left: 0;
    font-size: 1.2rem;   

    @media(min-width: 981px) {
        & {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
    }
`
const NavListItem = styled.li`
    flex: 0 1 auto;
    padding-right: 11px;
    padding-left: 11px;
    border-right: rgba(84, 87, 93, 0.5) 1px solid;
    position: relative;
    color: var(--darkblue);
    font-weight: 900;
    cursor: pointer;

    & a {
        text-decoration: none;
        color: var(--darkblue);
        font-family: 'Roboto', sans-serif;
    }

    & svg {
        margin-left: .3em;
        padding: .05em;
    }
`
const SubMenu = styled.ul`
    list-style-type: none;
    width: 240px;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 101%;
    background-color: var(--white);
    border-top: 3px var(--darkblue) solid;
    border-bottom: 3px var(--darkblue) solid;
    border-radius: 3px;
    z-index: 3;
    transition: all 0.1s ease-in;
    transform: scaleY(${props => props.isOpen ? "1" : "0"});
    transform-origin: top;

`
const SubMenuItem = styled(NavListItem)`
    border-right: none;
    border-bottom: rgba(84, 87, 93, .3) 1px solid;
    padding: 5px;
    transition: all .15s ease-in-out;
    letter-spacing: -1px;
    
    & a {font-weight: 600;}
    
    &:hover {
        border-top: rgb(84, 87, 93) 2px solid;
        border-bottom: rgb(84, 87, 93) 2px solid;
        padding: 7px 5px;
    }
`
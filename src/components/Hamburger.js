import React, {useState, useEffect, useRef} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {window, document} from "browser-monads"
import img from "../images/burger.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Hamburger(props) {
    const [isOpen, setIsOpen] = useState(false);
    const burgerBtnRef = useRef(null);
    const burgerMenuRef = useRef(null)

    const toggleBurger = () => setIsOpen(prev => !prev);

    useEffect(()=> {
        if(isOpen) {
            window.document.addEventListener('click', (e) => {
                if(e.target !== burgerMenuRef.current && e.target !== burgerBtnRef.current) {
                    setIsOpen(false);
                };
            });
        }
    });
    
    return (
        <>
        <BurgerButton onClick={toggleBurger} ref={burgerBtnRef}/>
        <BurgerDropdown isOpen={isOpen} ref={burgerMenuRef}>
            <BurgerList onClick={toggleBurger}>
                <StyledLink to="/"><li>Home</li></StyledLink>
                <StyledLink to="/criminaldefense"><li>Criminal Defense</li></StyledLink>
                <StyledSubLink to="/criminaldefense/st-louis-drug-lawyer"><li>Drug Charges</li></StyledSubLink>
                <StyledSubLink to="/criminaldefense/felony-charges"><li>Felony Charges</li></StyledSubLink>
                <StyledSubLink to="/criminaldefense/misdemeanor-charges"><li>Misdemeanor Charges</li></StyledSubLink>
                <StyledSubLink to="/criminaldefense/minor-in-possession"><li>Minor In Possession</li></StyledSubLink>
                <StyledSubLink to="/criminaldefense/ranges-of-punishment"><li>Ranges of Punishment for Crimes</li></StyledSubLink>
                <StyledLink to="/st-louis-dwi-lawyer"><li>DWI Defense</li></StyledLink>
                <StyledLink to="/st-louis-traffic-lawyer"><li>Traffic Law</li></StyledLink>
                <StyledLink to="/st-louis-personal-injury-lawyer"><li>Personal Injury</li></StyledLink>
                <StyledLink to="/about"><li>Attorney Bio</li></StyledLink>
                <StyledLink to="/client-reviews"><li>Client Reviews</li></StyledLink>
                <StyledLink to="/contact"><li>Contact Us</li></StyledLink>
            </BurgerList>
        </BurgerDropdown>        
        </>
    )
}

export default Hamburger

const BurgerButton = styled.button`
    position: relative;
    color: var(--primary);
    width: 30px;
    height: 30px;
    border: none;
    background-image: url(${img});
    background-color: transparent;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    @media (min-width: 981px) {
        display: none;
    }
    &:active, &:focus {
        outline: none;
  }
`
const BurgerDropdown = styled.div`
    width: 90vw;
    background-color: var(--cream);
    position: absolute;
    top: 10vh;
    right: 5vw;
    left: 5vw;
    z-index: 2;
    transform: scaleY(${props => props.isOpen ? "1.0" : "0.0"});
    transform-origin: top;
    border: ${props => props.isOpen ? "2px solid var(--dark)" : "0px"};
    border-radius: 10px;    
    overflow: hidden;
    transition: all .3s ease-in-out;
`
const BurgerList = styled.ul`
    height: 100%;
    list-style-type: none;
    padding: 20px 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: left;
    color: var(--primary);
    font-weight: bolder;
    font-size: 1.3rem;
    line-height: 1.5;
    margin: 0 3rem;

    & li {
        transition: 0.3s ease;    
    }

    & li:hover {
        border-top: 4px solid var(--primary);
        border-bottom: 4px solid var(--primary);
        padding: 6px 0;
    }

`

const StyledSubLink = styled(StyledLink)`
    font-size: 1.3rem;
    margin: 0 3rem 0 5rem;
`
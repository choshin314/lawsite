import React, {useState, useEffect, useRef} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {window} from "browser-monads"
import img from "../images/burger.svg"

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
                <StyledLink to="/criminal-defense"><li>Criminal Defense</li></StyledLink>
                <StyledSubLink to="/criminal-defense/st-louis-drug-lawyer"><li>Drug Charges</li></StyledSubLink>
                <StyledSubLink to="/criminal-defense/felony-charges"><li>Felony Charges</li></StyledSubLink>
                <StyledSubLink to="/criminal-defense/misdemeanor-charges"><li>Misdemeanor Charges</li></StyledSubLink>
                <StyledSubLink to="/criminal-defense/minor-in-possession"><li>Minor In Possession</li></StyledSubLink>
                <StyledSubLink to="/criminal-defense/ranges-of-punishment"><li>Ranges of Punishment</li></StyledSubLink>
                <StyledLink to="/st-louis-dwi-lawyer"><li>DWI Defense</li></StyledLink>
                <StyledLink to="/st-louis-traffic-lawyer"><li>Traffic Law</li></StyledLink>
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
// const BurgerDropdown = styled.div`
//     width: 90vw;
//     background-color: var(--cream);
//     position: absolute;
//     top: 10vh;
//     right: 5vw;
//     left: 5vw;
//     z-index: 2;
//     transform: scaleY(${props => props.isOpen ? "1.0" : "0.0"});
//     transform-origin: top;
//     border: ${props => props.isOpen ? "2px solid var(--dark)" : "0px"};
//     border-radius: 10px;    
//     overflow: hidden;
//     transition: all .3s ease-in-out;
// `

const BurgerDropdown = styled.div`
    width: 100%;
    height: 70vh;
    background-color: var(--cream);
    position: absolute;
    top: 10vh;
    right: 0;
    z-index: 2;
    transform: scaleY(${props => props.isOpen ? "1.0" : "0.0"});
    transform-origin: top;
    border-bottom: ${props => props.isOpen ? "5px solid var(--dark)" : "0px"}; 
    overflow: hidden;
    transition: all .2s ease-in-out;
`

const BurgerList = styled.ul`
    height: 100%;
    list-style-type: none;
    padding: 20px 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: left;
    color: var(--primary);
    font-weight: bolder;
    font-size: 1.3rem;
    line-height: 1.5;
    letter-spacing: 1px;
    margin: 0 3rem;

    & li {
        transition: 0.3s ease;   
        text-transform: uppercase; 
    }

    & li:hover, & li:active {
        color: var(--accent);
    }

`

const StyledSubLink = styled(StyledLink)`
    font-size: 1.3rem;
    margin: 0 3rem 0 5rem;
`
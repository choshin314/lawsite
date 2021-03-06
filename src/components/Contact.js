import React, {useState} from "react"
import styled from "styled-components"
import img from "../images/bgContactForm.jpg"
import {Button} from "./styledLib"
import Map from "./Map"
import { navigate } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function Contact({map}) {
  const [state, setState] = useState({name: '', email: '', phone: '', message: ''});

  const handleChange = event => {
      const {value, name} = event.target;
      setState(prev => ({ ...prev, [name]: value }))  
  }

  const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: encode({
          "form-name": "contact",
          ...state
        })
      })
        .then(() => {
          console.log('success')
          setState({name: '', email: '', phone: '', message: ''})
          navigate("/success")
        })
        .catch(error => console.log(error))
  }
  
  return(

      <Section>
          <Overlay />
          {map && <MapDiv><Map /></MapDiv>}
          <FormContainer>
              <FormTitle>Schedule a Free Consultation</FormTitle>
              <Form 
                name="contact" 
                method="post" 
                action="/success"
                data-netlify="true" 
                data-netlify-honeypot="bot-field" 
                onSubmit={handleSubmit}
              >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <InputContainer>
                      <Input onChange={handleChange} value={state.name} type="text" name="name" placeholder="Name" gridColumn="1 / span 1"/>
                      <Input onChange={handleChange} value={state.email} type="email" name="email" placeholder="Email Address" gridColumn="2 / span 1"/>
                      <Input onChange={handleChange} value={state.phone} type="tel" name="phone" placeholder="Phone Number" gridColumn="1 / 2" />
                      <TextArea onChange={handleChange} value={state.message} name="message" placeholder="Brief message describing your case (type of charge(s), court location, date of arrest/citation, etc.)" gridColumn="1 / span 2"/>
                  </InputContainer>
                  <Button primary size="2em" onClick={handleSubmit}>Send Message</Button>
              </Form>
          </FormContainer>
          
      </Section>
  )
}

export default Contact

const Section = styled.section`
    background-image: url(${img});
    background-size: cover;
    padding: 10px 0px;
    width: 100%;
    position: relative;
`
const Overlay = styled.div`
    background-color: rgba(32,28,68,0.66);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`


const FormContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 98%;
    border-radius: 5px;
    margin: 0 auto;
    overflow: hidden;
    background-color: ${props => props.background ? `${props.background}` : 'var(--white)'};
    color: ${props => props.color ? props.color : 'inherit'};

  @media(min-width: 768px) {
    & {
      width: 80%;
      max-width: 960px;
    }
  }
`

const FormTitle = styled.h2`
  display: block;
  background: var(--primary);
  color: var(--white);
  padding: .5em 1.5em;
`

const Form = styled.form`
  background: var(--cream);
  color: var(--dark);
  padding: 1em 1.5em .5em 1.5em;
  font-size: 1.2em;
  line-height: 1.5;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & input, & textarea {
      margin-bottom: 10px;
      background-color: var(--white);
      border: 2px var(--primary) solid;
      &:focus {
          outline: none;
      }
  }

  @media(min-width: 768px) {
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 1fr;

      & input, & texarea {
          margin-bottom: none;
      }
  }

`
const Input = styled.input`
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  grid-column: ${props => props.gridColumn};

`
const TextArea = styled.textarea`
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: 5px;
  border: none;
  grid-column: ${props => props.gridColumn};
  height: 200px;
  padding: 10px;
  
`

const MapDiv = styled(FormContainer)`
  background-color: var(--white);
  margin: 0 auto 1em auto;
`
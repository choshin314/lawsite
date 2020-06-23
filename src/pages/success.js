import React from 'react';
import Layout from '../components/layout';
import styled from "styled-components"
import pic from '../images/sent.png'

const helmet={
    title: "Successful Submission",
    description: "Success Page"
}

const Success = props => (
  <Layout helmetData={helmet}>
    <Section>
        <Div>
            <h1>Success!</h1>
            <span>Thank you for contacting the Law Office of Shin Cho!</span>
            <ImgDiv>
                <img src={pic} />
            </ImgDiv>
            <span>You will receive a response within 24 hours.</span>
        </Div>
    </Section>
  </Layout>
);

export default Success;

const Section = styled.section`
    position: relative;
    margin-top: 10vh;
    padding: 10vh;
`

const Div = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto;

    @media(min-width: 768px) {
        width: 80%;
        max-width: 960px;
    }

    h1 {
        font-size: 2rem;
        font-weight: 900;
        color: var(--primary);
        margin-bottom: 2rem;
    }

    span {
        display: block;
        background: var(--primary);
        color: var(--white);
        padding: 1em;
    }
`

const ImgDiv = styled.div`
    padding: 1rem;
    width: 100%;
    height: auto;
    color: var(--dark);
    display: flex;
    justify-content: center;

    img {
        width: 50%;
        padding: 20px;
        object-fit: cover;
        transform: translateX(8%)
    }
`

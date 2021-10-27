import React from "react"
import styled from "styled-components"

function Banner() {
  return (
    <BannerDiv>
      <div>
        <p>Please be advised that the Law Office of Shin Cho has <span class="da-gist">permanently closed</span></p>
      </div>
    </BannerDiv>
  )
}

export default Banner

const BannerDiv = styled.div`
  position: fixed;
  top: 10vh;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--primary);
  color: var(--white);
  font-weight: 500;
  font-size: 1rem;

  & div {
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
  }
  & p {
    max-width: 80%;
    text-align: center;
  }

  & .da-gist {
    text-decoration: underline;
    color: var(--accent);
  }

  @media(min-width: 768px) {
    & {
        font-size: 2rem;
        font-weight: 600;
    }
    & div {
      padding: 2rem;
    }
  }
`
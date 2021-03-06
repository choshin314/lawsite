import React from "react"
import styled from "styled-components"
import Badge from "./Badge"
import {Title} from "../components/styledLib"
import badgeRisingStars from "../images/badge-risingstars.png"
import badgeAvvoRating from "../images/badge-avvorating.png"
import badgeAvvoReviews from "../images/badge-avvoreviews.png"
import badgeNTL40 from "../images/badge-ntltop40.png"

const BadgeList = () => (
    <>
      <Title color="primary">Excellence in Criminal Defense</Title>
      <Wrapper>
          {badgeData.map((badgeObj, i, arr) => < Badge key={i} href={badgeObj.href} src={badgeObj.src} quantity={arr.length} />)}
      </Wrapper>
    </>
)


const badgeData = [
    { href: "https://profiles.superlawyers.com/missouri/st-louis/lawyer/shin-cho/a13ea016-9df3-4ae1-8100-5e818534ef77.html?utm_source=a13ea016-9df3-4ae1-8100-5e818534ef77&utm_campaign=v1-rsbadge-blue&utm_content=profile", src: badgeRisingStars },
    { href: "https://www.avvo.com/attorneys/63125-mo-shin-cho-4671500.html", src: badgeAvvoRating },
    { href: "https://www.avvo.com/attorneys/63125-mo-shin-cho-4671500.html", src: badgeAvvoReviews },
    { href: "#", src:  badgeNTL40 },

]

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2em 0;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 10px;

`

export default BadgeList

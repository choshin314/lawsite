import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import ReviewSlider from "../components/ReviewSlider"
import googleReviews from "../data/googleReviews.json"
import avvoReviews from "../data/avvoReviews.json"
import HeroSection from "../components/HeroSection"
import ContentSection from "../components/ContentSection"

const helmetData = {
    title: "Client Reviews",
    description: "Read client reviews about their experience with St. Louis Criminal Defense Lawyer, Shin Cho. The Law Office of Shin Cho is proud of its proven record of excellence in client satisfaction!"
}

const ClientReviews = () => (
    <Layout helmetData={helmetData}>
        <main>
            <HeroSection 
                title="Client Reviews"
                description="Simply put, we let our results and actions speak for themselves.  Hear what our past clients have to say.  Judge for yourself and if you like what you see, contact us today for a free consultation."
            />
            <ContentSection>
                <ReviewSlider reviews={googleReviews} title="Google Reviews" />
                <ReviewSlider reviews={avvoReviews} title="Avvo Reviews" />
            </ContentSection>
        </main>
    </Layout>
)

export default ClientReviews
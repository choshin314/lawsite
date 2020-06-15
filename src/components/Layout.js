import React from "react"
import {Helmet} from "react-helmet"
import Navigation from "./Navigation"
import Footer from "./Footer"
import './Layout.css';

const Layout = ({children, contactMap, helmetData}) => (
    <div>
        <Helmet titleTemplate="%s | Criminal Defense & DWI Lawyer St. Louis">
            <title>{helmetData.title}</title>
            <meta name="description" content={helmetData.description} />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        </Helmet>
        <Navigation />
        <main>
            {children}
        </main>
        <Footer />
    </div>
)

export default Layout;
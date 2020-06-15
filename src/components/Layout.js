import React from "react"
import {Helmet} from "react-helmet"
import Navigation from "./Navigation"
import Contact from "./Contact"
import Footer from "./Footer"
import './Layout.css';

// import FontAwesome and use its library component to make selected icons accessible by other components
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faMapMarkerAlt, faEnvelope, faAngleDown, faChevronRight, faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
// add our chosen icons to our library - now we can use them in other components
library.add(
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faAngleDown,
  faChevronRight,
  faChevronLeft,
  faStar
  // more icons go here
);


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
            <Contact map={contactMap ? true : false} />
        </main>
        <Footer />
    </div>
)

export default Layout;
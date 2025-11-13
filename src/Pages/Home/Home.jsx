import React from 'react';
import Banner from './Banner';
import HowITWorks from './HowITWorks';
import LatestSix from './LatestSix';
import TrustSection from '../Auth/TrustSection';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Trade Hub-Home</title>

            </Helmet>
            <Banner></Banner>
            <LatestSix></LatestSix>
            <TrustSection></TrustSection>
            <HowITWorks></HowITWorks>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import HowITWorks from './HowITWorks';
import LatestSix from './LatestSix';
import TrustSection from '../Auth/TrustSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestSix></LatestSix>
            <TrustSection></TrustSection>
            <HowITWorks></HowITWorks>
        </div>
    );
};

export default Home;
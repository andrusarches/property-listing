import React from 'react';

import IntroSection from '../intro-section/intro-section';
import ListingSection from '../listing-section/listing-section';
import ListingFilterSection from '../listing-filter-section/listing-filter-section';

const Main = ({propertyData, onInputChange, cardLimit, onSeeMoreClick, propertyDataState}) => {
    const mainHeading = `Our Latest Developments`;

    return (
        <>
            <main className="page-main">
                <h1 className="visually-hidden">Property Listing - Main Page</h1>

                <IntroSection title={mainHeading} />

                <ListingFilterSection onInputChange={onInputChange} />  
                <ListingSection propertyDataState={propertyDataState} propertyData={propertyData} cardLimit={cardLimit} onSeeMoreClick={onSeeMoreClick} />
            </main>
        </>
    );
};

export default Main;
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './listing-section.scss';

import spritesheet from '../../assets/img/spritesheet.svg';

import ListingList from '../listing-list/listing-list';

const ListingSection = ({propertyData, cardLimit, onSeeMoreClick, propertyDataState}) => {

    const handleClick = (evt) => {
        evt.preventDefault();
        onSeeMoreClick();
    };

    const {fetchedPropertyData, propertyDataIsLoading, propertyDataIsError} = propertyDataState;

    if (propertyDataIsLoading) {
        return (
            <section className="listing">
                <div className="listing__wrapper content-wrapper">
                    <h2 className="visually-hidden">Property Data is Being Loaded</h2>
                    <div className="loading-spinner"></div>
                </div>
            </section>
        );
    } else if (propertyDataIsError) {
        return (
            <section className="listing">
                <div className="listing__wrapper content-wrapper">
                    <h2 className="listing__error-message">Failed to Load Property Data</h2>
                </div>
            </section>
        );
    }

    return (
        <section className="listing">
            <div className="listing__wrapper content-wrapper">
                <h2 className="visually-hidden">Recently Developed Property Listing</h2>

                <ListingList fetchedPropertyData={fetchedPropertyData} propertyData={propertyData} cardLimit={cardLimit} />

                {cardLimit < propertyData.length 
                    ?
                    <Link className="listing__see-more-button" onClick={handleClick} to="#">
                        See more
                        <svg width="7" height="17">
                            <use xlinkHref={spritesheet + `#icon-arrow-right`} />
                        </svg>
                    </Link>
                    :
                    ''
                }
            </div>
        </section>
    );
};

ListingSection.propTypes = {
    propertyData: PropTypes.array.isRequired,
    cardLimit: PropTypes.number.isRequired
};

export default ListingSection;
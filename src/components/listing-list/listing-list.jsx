import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import './listing-list.scss';

import ListingCard from '../listing-card/listing-card';

const ListingList = ({fetchedPropertyData, propertyData, cardLimit}) => {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
    }, []);

    const nothingToShow = () => {
        return (
            <ul className="listing-list">
                <h3 className="listing-list__error-message">Sorry, nothing was found!</h3>
            </ul>
        );
    };

    if (fetchedPropertyData.length > 0 || isInitialMount.current) {
        if (propertyData.length > 0) {
            return (
                <ul className="listing-list">
                    {propertyData.slice(0, cardLimit).map((item) => (<ListingCard key={item.id} data={item} />))}
                </ul>
            );
        } else {
            if (isInitialMount.current) {
                return (``);
            } else (
                nothingToShow()
            )
        }
    }

    return (
        nothingToShow()
    );
};

ListingList.propTypes = {
    fetchedPropertyData: PropTypes.array.isRequired,
    propertyData: PropTypes.array.isRequired,
    cardLimit: PropTypes.number.isRequired
};


export default ListingList;
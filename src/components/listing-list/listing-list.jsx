import React from 'react';
import PropTypes from 'prop-types';

import './listing-list.scss';

import ListingCard from '../listing-card/listing-card';

const ListingList = ({propertyData, cardLimit}) => {
     
    return (
        <ul className="listing-list">
            {propertyData.length > 0
                ? propertyData.slice(0, cardLimit).map((item) => (<ListingCard key={item.id} data={item} />))
                : onEmptyDataArray()   
            }
        </ul>
    );
};

ListingList.propTypes = {
    propertyData: PropTypes.array.isRequired,
    cardLimit: PropTypes.number.isRequired
};


export default ListingList;
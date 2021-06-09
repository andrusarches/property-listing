import React from 'react';

import './listing-list.scss';

import ListingCard from '../listing-card/listing-card';

const ListingList = ({propertyData, cardLimit}) => {

    return (
        <ul className="listing-list">
            {propertyData.length > 0
                ? propertyData.slice(0, cardLimit ? cardLimit : propertyData.length).map((item) => (<ListingCard key={item.id} data={item} />))
                : <h3 className="listing-list__error-message">Sorry, nothing was found!</h3>    
            }
        </ul>
    );
};

export default ListingList;
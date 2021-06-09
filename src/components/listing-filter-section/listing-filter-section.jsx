import React from 'react';

import './listing-filter-section.scss';

const ListingFilterSection = ({onInputChange}) => {

    const handleInputChange = (evt) => {
        evt.preventDefault();
        onInputChange(evt.target.value);
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
    };

    return (
        <section className="listing-filter">
            <div className="listing-filter__wrapper content-wrapper">
                <form className="listing-filter__form" onSubmit={handleFormSubmit}>
                    <label className="listing-filter__label" htmlFor="title">Filter</label>
                    <input onChange={handleInputChange} className="listing-filter__input" id="title" name="title" type="text" placeholder="By Property Title" required/>
                </form>
            </div>
        </section>
    );
};

export default ListingFilterSection;
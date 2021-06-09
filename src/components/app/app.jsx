import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Main from '../main/main';
import NotFound from '../404-page-not-found/404-page-not-found';

import { filterByTitle } from '../../utils';
import { INITIAL_CARD_LIMIT } from '../../const';

import FetchPropertyDataApi from '../../api/fetch-property-data/fetch-property-data';

const App = () => {
    const [cardLimit, setCardLimit] = useState(INITIAL_CARD_LIMIT);

    const [query, setQuery] = useState('');

    const [propertyDataState] = FetchPropertyDataApi();

    const {fetchedPropertyData} = propertyDataState;

    const [filteredPropertyData, setFilteredPropertyData] = useState(fetchedPropertyData);

    useEffect(() => {
        if (query.length > 3) {
            let filteredData = fetchedPropertyData.filter(item => filterByTitle(item, query));
            setFilteredPropertyData(filteredData);
        } else {
            setFilteredPropertyData(fetchedPropertyData);
            setCardLimit(INITIAL_CARD_LIMIT);
        }
    }, [query, fetchedPropertyData]);

    const handleFormInputChange = value => {
        setQuery(value);
    };

    const handleSeeMoreClick = () => {
        setCardLimit(filteredPropertyData.length);
    };

    return (
        <BrowserRouter basename="/property-listing">
            <Switch>
                <Route path="/" exact render={() => (
                    <>
                        <ScrollToTop />
                        <Main onInputChange={handleFormInputChange} propertyDataState={propertyDataState} propertyData={filteredPropertyData} cardLimit={cardLimit} onSeeMoreClick={handleSeeMoreClick} />
                    </>
                )} />

                <Route render={() => (
                    <>
                        <ScrollToTop />
                        <NotFound />
                    </>
                )} />

            </Switch>
        </BrowserRouter>
    );
};

export default App;
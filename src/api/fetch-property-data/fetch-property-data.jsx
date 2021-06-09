import {useEffect, useReducer} from 'react';

import { PROPERTY_DATA_REQUEST_URL } from '../../const';

const initialPropertyData = [];

const initialPropertyDataState = {
    fetchedPropertyData: initialPropertyData,
    propertyDataIsLoading: false,
    propertyDataIsError: false
};

const PROPERTY_DATA_FETCH_ACTIONS = {
    FETCH_INIT: `FETCH_INIT`,
    FETCH_SUCCESS: `FETCH_SUCCESS`,
    FETCH_FAILURE: `FETCH_FAILURE`
}

const propertyDataFetchReducer = (state, action) => {
    switch (action.type) {
        case PROPERTY_DATA_FETCH_ACTIONS.FETCH_INIT:
            return {
                ...state,
                propertyDataIsLoading: true,
                propertyDataIsError: false
            };
        case PROPERTY_DATA_FETCH_ACTIONS.FETCH_SUCCESS:
            return {
                ...state,
                fetchedPropertyData: action.payload,
                propertyDataIsLoading: false,
                propertyDataIsError: false
            };
        case PROPERTY_DATA_FETCH_ACTIONS.FETCH_FAILURE:
            return {
                ...state,
                propertyDataIsLoading: false,
                propertyDataIsError: true
            };
        default:
            throw new Error();
    }
};

const FetchPropertyDataApi = () => {
    const [propertyDataState, dispatch] = useReducer(propertyDataFetchReducer, initialPropertyDataState);
    // const [fetchedPropertyData, setFetchedPropertyData] = useState([]);

    useEffect(() => {
        let didCancel = false;

        const controller = new AbortController();

        const requestUrl = PROPERTY_DATA_REQUEST_URL;
        const fetchOptions = {method: `GET`, signal: controller.signal };
    
        setTimeout(() => controller.abort(), 4000);

        const fetchPropertyData = async () => {
            dispatch({ type: PROPERTY_DATA_FETCH_ACTIONS.FETCH_INIT });

            fetch(requestUrl, fetchOptions)
                .then(response => response.json())
                .then(data => {
                    if (!didCancel) {
                        dispatch({ type: PROPERTY_DATA_FETCH_ACTIONS.FETCH_SUCCESS, payload: data });
                    }
                })
                .catch(err => {
                    if (!didCancel) {
                        console.log(err);
                        dispatch({ type: PROPERTY_DATA_FETCH_ACTIONS.FETCH_FAILURE });
                    }
                });
        };

        fetchPropertyData();

        return () => {
            didCancel = true;
        };
    }, []);

    return [propertyDataState];
};

export default FetchPropertyDataApi;
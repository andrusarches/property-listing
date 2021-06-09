import React from 'react';
import { Link } from 'react-router-dom';

import { numberWithCommas, capitalizeFirstLetterOfEachWord } from '../../utils';
import { LISTING_TYPE } from '../../const';

import './listing-card.scss';

const ListingCard = ({data}) => {
    const {id, title, address, type, price} = data;

    const href=`/details/${id}`;

    return (
        <li className="listing-card">
            <article className="listing-card__wrapper">
                <Link to={href} className="listing-card__photo-wrapper-link" aria-label={`Go to ` + title + ` listing page`}>
                    <picture>
                        <source media="(min-width: 779px)" srcSet="https://via.placeholder.com/379x227/FF9999/FFFFFF?text=379x227%20placeholder" />
                        <img className="listing-card__photo" width="360" height="227" src="https://via.placeholder.com/360x227/FF9999/FFFFFF?text=360x227%20placeholder" alt={title + ` - Photo`} />
                    </picture>
                    {type !== undefined || type !== null ? <div className="listing-card__tag-wrapper" style={{backgroundColor: LISTING_TYPE[type].color}}>
                        <p className="listing-card__tag">{LISTING_TYPE[type].humanized}</p>
                    </div> : ''}
                </Link>
                <div className="listing-card__info-wrapper">
                    <Link to={href} className="listing-card__link" aria-label={`Go to ` + title + ` page`}>
                        <h2 className="listing-card__title">{capitalizeFirstLetterOfEachWord(title)}</h2> 
                    </Link>
                    <p className="listing-card__address">{address}</p>
                    <p className="listing-card__price">New Properties for Sale from <b>£{numberWithCommas(price)}</b></p>
                    <p className="listing-card__ownership-options">Shared Ownership Available</p>
                </div>
            </article>
        </li>
    );
};


export default ListingCard;
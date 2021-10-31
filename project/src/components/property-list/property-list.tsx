import Card from '../card/card';
import {PropertyType} from '../../types/offers';
import { useState } from 'react';

type PropertyListScreenProps = {
  offers: PropertyType[];
}

function PropertyList({offers}: PropertyListScreenProps): JSX.Element {
  const [, setActiveCard] = useState('');

  const hoverActiveCard = (e: any) => {
    setActiveCard(e.target);
  };

  const hoverInactiveCard = (e: any) => {
    setActiveCard('');
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => {
        const keyValue = `${id}`;
        return (
          <Card key = {keyValue} cardData = {offer} onMouseEnter = {hoverActiveCard} onMouseLeave = {hoverInactiveCard}/>
        );
      })}

    </div>
  );
}

export default PropertyList;

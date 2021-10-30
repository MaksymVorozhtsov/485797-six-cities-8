import Card from '../card/card';
import {PropertyType} from '../../types/offers';
import { useState } from 'react';

type PropertyListScreenProps = {
  offers: PropertyType[];
}

function PropertyList({offers}: PropertyListScreenProps): JSX.Element {
  const [, setActiveCard] = useState();

  const hoverCard = (e: any) => {
    setActiveCard(e.target);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => {
        const keyValue = `${id}`;
        return (
          <Card key = {keyValue} cardData = {offer} onMouseEnter = {hoverCard}/>
        );
      })}

    </div>
  );
}

export default PropertyList;

import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  },
  points: {
    title: string,
    lat: number,
    lng: number,
  }[]
}

function Map({city, points}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 60],
    iconAnchor: [30, 60],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div className="cities__right-section">
      <section className="cities__map map" style={{height: '100%'}} ref={mapRef}></section>
    </div>
  );
}

export default Map;

import "./zoneMap.scss";
import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from 'react';
import fmzDummy from "../../assets/images/fisheries-management-zones.jpg";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/reducer/ZoneReduser";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function ZoneMap() {

  const dispatch = useDispatch();

    // Basic Variables for Mapbox setting
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-81.62055029720779);
  const [lat, setLat] = useState(47.08209655280388);
  const [zoom, setZoom] = useState(7);

  // 47.08209655280388, -81.62055029720779

  useEffect(() => {
    // Bring map preset from Mapbox
    async function getMapBox() {
      if(map.current) return;
      setLng(-81.62055029720779);
      setLat(47.08209655280388);
      setZoom(7);
      map.current = new mapboxgl.Map({
       container: mapContainer.current,
       style: 'mapbox://styles/lesheon/clnnt8heh007m01qm2pd75446',
       center: [lng, lat],
       zoom: zoom
       });
    }

    getMapBox();

    // Clicking a FMZ Area will toggle this function.
    map.current.on('click', 'fmz-click-area', function (e) {
      let features = map.current.queryRenderedFeatures(e.point);

      //display modal of FishList with according zone.
      dispatch(dispatch(toggleModal({toggle: true, id: features[0].properties.FISHERIES_})))
    });

    // Hover state on mouse cursor in FMZ Area.
    map.current.on('mouseenter', 'fmz-click-area', () => {
      map.current.getCanvas().style.cursor = 'pointer'
    })
    map.current.on('mouseleave', 'fmz-click-area', () => {
      map.current.getCanvas().style.cursor = ''
    })

  });

    if(!map) return <img className="zoneMap__dummy-mapbox" src={fmzDummy} alt=""/>;

    return (
        <div ref={mapContainer} className='zoneMap'/>
    );
}
import React, {useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
import tw from 'tailwind-styled-components'

mapboxgl.accessToken = 'pk.eyJ1IjoicmlhMDcyMCIsImEiOiJja3ZudjE3NDMzZjJnMnZtbHJtYW83OHVyIn0.rfY_igomPGUt5HW4I5FQxA';

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    })

    if(props.pickupCoordinates){
      addToMap(map, props.pickupCoordinates)
    }

    if(props.dropoffCoordinates){
      addToMap(map, props.dropoffCoordinates)
    }

    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, cordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(cordinates)
      .addTo(map);
  }

  return (
    <Wrapper id='map'></Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
  flex-1 h-1/2
`

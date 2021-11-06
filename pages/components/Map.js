import React, {useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
import tw from 'tailwind-styled-components'

mapboxgl.accessToken = 'pk.eyJ1IjoicmlhMDcyMCIsImEiOiJja3ZudjE3NDMzZjJnMnZtbHJtYW83OHVyIn0.rfY_igomPGUt5HW4I5FQxA';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    }); 
  })

  return (
    <Wrapper id='map'></Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
  flex-1
`

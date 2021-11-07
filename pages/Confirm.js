import React, {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
  const router = useRouter()
  const { pickup, dropoff } = router.query

  console.log('pickup', pickup)
  console.log('dropoff', dropoff)

  const [ pickupCoordinates, setPickupCoordinates] = useState()
  const [ dropoffCoordinates, setDropoffCoordinates] = useState()

  const getPickupCoordinates = (pickup) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicmlhMDcyMCIsImEiOiJja3ZudjE3NDMzZjJnMnZtbHJtYW83OHVyIn0.rfY_igomPGUt5HW4I5FQxA",
        limit: 1,
      })
    )
    .then(response => response.json())
    .then(data => {
      setPickupCoordinates(data.features[0].center);
    })
  }

  const getDropoffCoordinates = (dropoff) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicmlhMDcyMCIsImEiOiJja3ZudjE3NDMzZjJnMnZtbHJtYW83OHVyIn0.rfY_igomPGUt5HW4I5FQxA",
        limit: 1,
      })
    )
    .then(response => response.json())
    .then(data => {
      setDropoffCoordinates(data.features[0].center);
    })
  }

  useEffect(()=>{
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff])

  return (
    <Wrapper>
      <Link href="/">
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </Link>
      <Map 
        pickupCoordinates={pickupCoordinates} 
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>
            Confirm UberX
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
  flex h-screen flex-col
`
const BackButton = tw.img`
  cursor-pointer w-10 h-10 bg-white rounded-full absolute z-10
`
const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
  border-t-2
`
const ConfirmButton = tw.div`
  bg-black text-white my-4 mx-4 py-4 text-xl text-center
`

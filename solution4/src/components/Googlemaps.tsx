import {GoogleMap, LoadScriptNext, MarkerF} from '@react-google-maps/api'
import {useMemo} from 'react'
import styled from 'styled-components'

function Googlemaps() {
  const center = useMemo(() => ({lat: 37.4785631, lng: 126.8567967}), [])

  return (
    <Wrapper>
      <LoadScriptNext googleMapsApiKey={`AIzaSyDbRsFZxbeWSiSTVJtpbXvC4SgkbDcgR5k`}>
        <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
          <MarkerF position={center} />
        </GoogleMap>
      </LoadScriptNext>
    </Wrapper>
  )
}
export default Googlemaps

const Wrapper = styled.div`
  .map-container {
    width: 100%;
    height: 500px;
  }
`
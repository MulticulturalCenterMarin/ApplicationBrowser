/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import ReactMapGL, {Marker} from 'react-map-gl';
import Dimensions from 'react-dimensions'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Link, Paragraph, Section, SVG} from 'atomic'
import { DrawerLink } from 'fusion'
import { 
  Dimension
} from 'containers'

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX;

/* ------------------------------- Component -------------------------------- */
const MapBox = props => {
return <ReactMapGL
  width={props.containerWidth}
  height={props.containerHeight}
  latitude={37.7577}
  longitude={-122.4376}
  zoom={8}
  mapboxApiAccessToken={MAPBOX_TOKEN}
  onViewportChange={(viewport) => {
    const {width, height, latitude, longitude, zoom} = viewport;
    // Optionally call `setState` and use the state to update the map.
  }}>
  <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
    <div>You are here</div>
  </Marker>
  <Marker latitude={37.98} longitude={-122.91} offsetLeft={-20} offsetTop={-10}>
    <div>You are here</div>
  </Marker>
  </ReactMapGL>
}

export default Dimensions()(MapBox)


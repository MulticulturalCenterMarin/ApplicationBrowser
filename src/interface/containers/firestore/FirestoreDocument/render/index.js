/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import {Heading, Image, Paragraph, Container, Section} from 'atomic'
/* ------------------------ Initialize Dependencies ------------------------- */
import Foundry from 'foundry'
/* ---------------------------- Module Package ------------------------------ */
const GraphRequest = ({data, id, foundry}) => {
  if(!data) return null
  let ComponentFoundry = Foundry[foundry]
  return ComponentFoundry ?  <ComponentFoundry id={id} {...data}/> : null
}
/* ---------------------------- Export Package ------------------------------ */
export default GraphRequest

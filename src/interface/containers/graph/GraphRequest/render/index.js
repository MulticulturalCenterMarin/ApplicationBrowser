/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import {Heading, Image, Paragraph, Container, Section} from 'atomic'
/* ------------------------ Initialize Dependencies ------------------------- */
import Foundry from 'foundry'
/* ---------------------------- Module Package ------------------------------ */
const GraphRequest = ({data,foundry}) => {
  if(!data) return null
  let ComponentFoundry = Foundry[foundry]
  return (
    <Flex direction={['row']} wrap='wrap'>
     { data && ComponentFoundry ?  <ComponentFoundry {...data}/> : null }
    </Flex>
  )
}
/* ---------------------------- Export Package ------------------------------ */
export default GraphRequest

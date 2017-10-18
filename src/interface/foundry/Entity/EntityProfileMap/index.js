/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
 Flex, Box,
} from 'atomic'
import {
  MapAdvancedCompose
} from 'foundry'

/* ------------------------------- Component -------------------------------- */
export default props => {

return <Box h={[160,200]} > <MapAdvancedCompose delta={props.match.params.id} entity={props.match.params.entity} /></Box>}
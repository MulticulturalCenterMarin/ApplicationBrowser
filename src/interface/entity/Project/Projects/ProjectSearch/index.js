/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex, Heading, HorizontalRule
} from 'atomic'
import {
  FormProjectSearch
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} >
  <Heading level={[3]} f={[3]}>Project Search</Heading>
  <HorizontalRule bi='colorBase' bs={1} w={[1]} />
  <FormProjectSearch/>
</Box>
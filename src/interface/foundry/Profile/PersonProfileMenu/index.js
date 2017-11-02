/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {Box} from 'atomic'
import {
  LinkIconContext,
} from 'foundry'
import {
  MenuPersonProfile
} from 'content/menus'
/* ------------------------------- Component -------------------------------- */
export default props => <Box bg='white' bs={[1]} p={[10]} >{MenuPersonProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box>
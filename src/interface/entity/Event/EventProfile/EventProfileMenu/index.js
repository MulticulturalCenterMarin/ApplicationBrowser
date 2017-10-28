/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {Box} from 'atomic'
import {
  LinkIconContext,
} from 'foundry'
import {
  MenuEventProfile
} from 'content/menus'
/* ------------------------------- Component -------------------------------- */
export default props => <Box bg='white' bs={[1]} p={[10]} >{MenuEventProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box> 
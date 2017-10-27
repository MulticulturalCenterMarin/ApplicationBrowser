/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {Box} from 'atomic'
import {
  LinkIconContext,
} from 'foundry'
import {
  MenuArticleProfile
} from 'content/menus'
/* ------------------------------- Component -------------------------------- */
export default props => <Box bg='white' bs={[1]} p={[10]} >{MenuArticleProfile.map(item=> <LinkIconContext {...item} {...props} /> )}</Box>
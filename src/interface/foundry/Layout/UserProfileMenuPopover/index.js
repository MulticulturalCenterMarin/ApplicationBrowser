import React from 'react'
import { 
  Flex, Box, 
} from 'atomic'
import { MenuAsideItem } from 'foundry'
import { MenuUserProfile } from 'content/menus'
export default props => <Box
  color='white'
  gradient='blue'
  br={5}
  >{MenuUserProfile.map(item=> <MenuAsideItem {...props} {...item}/> )}</Box>
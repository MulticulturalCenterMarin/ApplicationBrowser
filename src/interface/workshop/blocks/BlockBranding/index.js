/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box, Heading, Image, Span, Link } from 'atomic'
import UserProfile from 'containers/user/UserProfile'
import { DrawerOpen } from 'containers'
import {
  MenuProjectsPopover,
  MenuResourcePopover,
  MenuOrganizationPopover,
  MenuNewsPopover,
} from 'foundry'

/* --------------------------- Styled Components ---------------------------- */
import { AuthorizationLogin} from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props => (
    <Flex direction={['column', 'row']} align={"stretch"} justify="center"  bg={['blue']} gradient={['blue']} gradientDir='45deg' color={['blueLight']} bs={[0]}  z='20' pos='relative'>
      <Flex align="center" justify="left" w={[1, 1, 0.35]} pl={[15]} direction={['row']} >
        <Image src={assets.graphics.logo} w={[35, 45, 65]} mb={[0, 0, -30]} mr={[10]} />
        <Link to="/"><Heading color={'white'} level={4} margin={'0'} fontSize={[3]} fontWeight={'100'}>Multicultural <Span fontWeight={[500]} >Center of Marin</Span></Heading></Link>
      </Flex>
      
      <Flex align="center" w={[1, 1, 0.35]} display={['none', 'none', 'Flex']} >
        <MenuProjectsPopover/>
        <MenuOrganizationPopover/>
        <MenuResourcePopover/>
        <MenuNewsPopover/>
      </Flex>
      <Flex align="center" justify={[ 'center', 'center', 'flex-end']} pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.23]}>
        <UserProfile py={[10]} />
      </Flex>
      <Flex align="center" justify='center' bg={['blueDark']} py={[10]} color='white' w={[1, 1, 0.07]} textAlign="center">
        <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
      </Flex>
    </Flex>
)

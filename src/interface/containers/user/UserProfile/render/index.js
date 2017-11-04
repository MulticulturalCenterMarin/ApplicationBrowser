/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Button, Link, SVG } from 'atomic'
import DialogOpen from 'containers/dialog/DialogOpen'
/* --------------------------- Styled Components ---------------------------- */
import { PopoverPure, AuthenticatedMenuProfile } from 'containers'
import { LinkIconSimple, PersonProfileMenu } from 'foundry'
import { LinkIcon, UserProfileMenuPopover, AsideMenuMain,} from 'foundry'
import { MenuUserProfile, MenuEntityProfile } from 'content/menus'
import { AuthorizationLogin} from 'containers'
const ProfileMenuMap = <Box bg='white' bs={[1]} p={[10]} >{MenuUserProfile.map(item=> <LinkIconSimple {...item}/> )}</Box>
const ProfileMenu = props => <Flex 
  direction={['column']}
  bg='blue'
  color='white'
  br={10}
  bs={2}
  p={15}
  >
  <AuthenticatedMenuProfile
    branches={MenuEntityProfile}
    foundry='MenuRecursive'
    styled ={{
      styledIconWrapper: {
        bg:'blue',
        p:10,
      },
      styledChildWrapper: {
        bg: 'rgba(255,255,255,0.15)',
        color: 'white'
      }
    }
    }
  />
</Flex>
/* ------------------------------- Component -------------------------------- */
const UserProfile = (props) => {
  if (!props.user) return <Flex 
        align="center"
        justify={[ 'center', 'center', 'flex-end']}
        color='white'
        pr={[null, null, 15]}
        py={[5, 5, 'inherit']}
        w={[1]}>
        Login via 
        <Box px={10}>
          <AuthorizationLogin bg='google' children='Google' providerSelection='google' />
        </Box>
        <Box px={10}>
          <AuthorizationLogin bg='facebook' children='Facebook' providerSelection='facebook' />
        </Box>
        <Box px={10}>
          <AuthorizationLogin bg='twitter' children='Twitter' providerSelection='twitter' />
        </Box>
      </Flex>
  const { photoURL, displayName } = props.user
  return (
    <Flex {...props} direction={['row']} justify='center' align={['center', null, 'center']} wrap='wrap' textAlign={['center']} w={[1]} >
      <Box flex={['1 1 0', '2 1 auto']}  >
        <Text>{displayName}</Text>
      </Box>
      <Box flex={['1 1 0', '1 1 auto']}  >
        <PopoverPure delta="PersonMenu" body={ProfileMenu} >
          <Image src={photoURL} h={[37.5]} w={[37.5]} br={0.5} bs={[2]} b={['2px solid transparent']} bc={['white']} />
        </PopoverPure>
      </Box>
      <Box flex={['1 1 0', '2 1 auto']}  >
        <Button onClick={props.logout} f={[0]} >Logout</Button>
      </Box>
    </Flex>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default UserProfile
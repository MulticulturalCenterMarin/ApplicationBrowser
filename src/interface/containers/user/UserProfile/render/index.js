/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Image, Text } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Button, Link, SVG } from 'atomic'
import DialogOpen from 'containers/dialog/DialogOpen'
/* --------------------------- Styled Components ---------------------------- */
import { PopoverPure } from 'containers'
import { LinkIconSimple, PersonProfileMenu } from 'foundry'
import { LinkIcon, UserProfileMenuPopover, AsideMenuMain,} from 'foundry'
import { MenuUserProfile } from 'content/menus'
const ProfileMenuMap = <Box bg='white' bs={[1]} p={[10]} >{MenuUserProfile.map(item=> <LinkIconSimple {...item}/> )}</Box>
/* ------------------------------- Component -------------------------------- */
const UserProfile = (props) => {
  if (!props.user) return <DialogOpen foundry='LoginDialog'>
              <Flex>
                <SVG svg={assets.svg.cultureEagle} svgColor='white' w={[30]} h={[30]} />
                <Button gradient='cherry'>Login</Button>
              </Flex>
            </DialogOpen>
  const { photoURL, displayName } = props.user
  return (
    <Flex {...props} direction={['row']} justify='center' align={['center', null, 'center']} wrap='wrap' textAlign={['center']} w={[1]} >
      <Box flex={['1 1 0', '2 1 auto']}  >
        <Text>{displayName}</Text>
      </Box>
      <Box flex={['1 1 0', '1 1 auto']}  >
        <PopoverPure delta="PersonMenu" body={UserProfileMenuPopover} >
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
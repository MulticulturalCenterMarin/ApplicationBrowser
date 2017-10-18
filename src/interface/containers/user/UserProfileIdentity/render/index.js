/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'particles'
import Login from 'workshop/forms/authentication/AuthorizationLogin'
/* ------------------------- Internal Dependencies -------------------------- */
import { Button, Heading, Image, Link } from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
import { PopoverPure } from 'containers'
import { LinkIconSimple } from 'foundry'
import { MenuUserProfile } from 'content/menus'
/* ------------------------------- Component -------------------------------- */
const ProfileMenuMap = <Box bg='white' bs={[1]} p={[10]} >{MenuUserProfile.map(item=> <LinkIconSimple {...item}/> )}</Box>

const UserProfile = (props) => {
  if (!props.user) return <Login children='Login/Register' />
  const { photoURL, displayName, email } = props.user
  return (
    <Flex {...props} direction={['row']} justify='center' align={['center', null, 'center']} wrap='wrap' textAlign={['center']} w={[1]} >
      <Flex flex={['1 1 0', '2 1 auto']} direction={['row']} align='center' p={[10, 15]} >
        <PopoverPure body={ProfileMenuMap} >
          <Image src={photoURL} w={[65]} br={0.5} bs={[2]} b={['2px solid transparent']} bc={['white']} />
        </PopoverPure>
        <Flex direction='column' align='left' pl={[10]} >
          <Heading f={[3]} level={[3]}>{displayName}</Heading>
          <Heading f={[1]} level={[5]} color='blue' >{email}</Heading>
        </Flex>
      </Flex>
      <Box flex={['1 1 0', '1 1 auto']}  >
      </Box>
      <Box flex={['1 1 0', '2 1 auto']}  >
      </Box>
    </Flex>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default UserProfile
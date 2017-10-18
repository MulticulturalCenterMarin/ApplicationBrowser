/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Link, Paragraph, Section, SVG} from 'atomic'
import { 
  HotlineActivityQuery,
  HotlineActivityQueryToday,
  HotlineActivityQueryStorage,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
const UserProfileDashboard = props => {
return <Absolute left right top bottom align='stretch' h={1} is={Flex} >
  <Box bg='white' w={[1]} p={[15, 20, 35]}>
      <Heading level={[3]} f={[6]}>Active</Heading>
      <HotlineActivityQuery {...props} />
      <Heading level={[3]} f={[6]}>Later Today</Heading>
      <HotlineActivityQueryToday {...props}/>
      <Heading level={[3]} f={[6]}>Full Calendar</Heading>
      <HotlineActivityQueryStorage {...props} />
  </Box>
</Absolute>
}

UserProfileDashboard.defaultProps = {

}

export default UserProfileDashboard
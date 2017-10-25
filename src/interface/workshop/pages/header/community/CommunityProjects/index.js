/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { ButtonLink } from 'fusion'
import { HeaderActions } from 'foundry'
import { CommunityChildMenu } from 'workshop/blocks'

/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => (
<HeaderActions 
  title="Projects" 
  tagline="Stay Active with New Tasks"
  background={assets.images.presenting}
  buttons={<ButtonLink button={{gradient: 'cherry'}} >Get Involved</ButtonLink>} 
  actions={<CommunityChildMenu/>} 
/>)
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
  title="Community" 
  tagline="Uniting Culture + Ideas" 
  background={assets.images.canal}
  buttons={<ButtonLink button={{gradient: 'cherry'}} >Get Involved</ButtonLink>} 
  actions={<CommunityChildMenu/>} 
/>)
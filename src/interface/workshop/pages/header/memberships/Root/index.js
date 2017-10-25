/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { ButtonLink } from 'fusion'
import { HeaderActions } from 'foundry'
import { MembershipsChildMenu } from 'workshop/blocks'
/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => (
<HeaderActions 
  title="Memberships" 
  tagline="Add To The Community with Resources or Time" 
  background={assets.images.canal}
  buttons={<ButtonLink button={{gradient: 'cherry'}} >Get Involved</ButtonLink>} 
  actions={<MembershipsChildMenu/>} 
/>)
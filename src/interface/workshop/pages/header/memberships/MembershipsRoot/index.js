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
  title="Root" 
  tagline="$1,000 or 80 Hours of Community Service"
  background={assets.images.justice}
  buttons={<ButtonLink button={{gradient: 'cherry'}} >Get Involved</ButtonLink>} 
  actions={<MembershipsChildMenu/>} 
/>)
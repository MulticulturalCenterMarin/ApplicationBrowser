/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { ButtonLink } from 'fusion'
import { HeaderActions } from 'foundry'
import { ToolsChildMenu } from 'workshop/blocks'

/* ------------------------------- Component -------------------------------- */
export default props=> {
  return (
<HeaderActions 
  title="Realtime Dashboard" 
  tagline="What's Happening Now" 
  background={assets.images.peppers}
  buttons={<ButtonLink button={{gradient: 'cherry'}} >Get Involved</ButtonLink>} 
  actions={<ToolsChildMenu/>} 
/>)}
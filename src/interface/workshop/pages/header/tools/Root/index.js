/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import {BackgroundImage} from 'atomic'
import { ButtonLink } from 'fusion'
import { HeaderActions } from 'foundry'
import { ToolsChildMenu } from 'workshop/blocks'
/* ------------------------------- Component -------------------------------- */
export default ({ ...props }) => (
<HeaderActions 
  tagline="Connecting With People" 
  title="Grassroots Organizing" 
  background={<BackgroundImage image={assets.images.hola} ratio={1/5} o={[0.5]} /> }
  buttons={<ButtonLink button={{gradient: 'cherry'}} >Get Involved</ButtonLink>} 
  actions={<ToolsChildMenu/>} 
/>)
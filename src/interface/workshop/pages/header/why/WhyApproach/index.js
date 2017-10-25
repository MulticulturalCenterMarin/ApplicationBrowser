/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import {BackgroundImage} from 'atomic'
import { ButtonLink } from 'fusion'
import { HeaderActions } from 'foundry'
import { WhyChildMenu } from 'workshop/blocks'

/* ------------------------------- Component -------------------------------- */
export default props=> (
<HeaderActions 
  title="Diverse Relationships" 
  tagline="The Why - Approach" 
  background={<BackgroundImage image={assets.images.happy} ratio={1/2} opacity={[0.5]} /> }
  buttons={<ButtonLink button={{gradient: 'cherry'}} >Get Involved</ButtonLink>} 
  actions={<WhyChildMenu/>} 
/>)
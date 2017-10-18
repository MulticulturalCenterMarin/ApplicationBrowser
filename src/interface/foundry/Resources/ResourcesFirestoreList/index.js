/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {BackgroundImage} from 'atomic'
import { FirestoreList } from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => <FirestoreList
  delta='resourceFilter'
  foundry='ResourceCard'
  itemStyled={{
    w: 1,
  }}
/>
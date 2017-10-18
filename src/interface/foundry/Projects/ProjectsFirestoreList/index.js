/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {BackgroundImage} from 'atomic'
import { FirestoreList } from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => <FirestoreList
  delta='ProjectSearch'
  foundry='ProjectCard'
  itemStyled={{
    w: [1, 1, 0.3],
  }}
/>
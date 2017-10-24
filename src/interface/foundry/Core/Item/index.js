/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Foundry from 'foundry'
import Entity from 'entity'
/* ---------------------------- Module Package ------------------------------ */
export default ({data, foundry, styled, ...props}) => !foundry 
? null 
: !styled
  ? React.createElement(Foundry[foundry], {...props, ...data}) 
  : React.createElement(Foundry[foundry], {...props, ...data, ...styled}) 

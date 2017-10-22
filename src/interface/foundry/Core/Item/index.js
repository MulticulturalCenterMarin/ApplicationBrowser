/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Foundry from 'foundry'
/* ---------------------------- Module Package ------------------------------ */
export default ({data, foundry, styled}) => !foundry 
? null 
: !styled
  ? React.createElement(Foundry[foundry], data) 
  : React.createElement(Foundry[foundry], { ...data, ...styled}) 

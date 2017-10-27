/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import Foundry from 'foundry'
/* ---------------------------- Module Package ------------------------------ */
export default ({data, foundry, styled, ...props}) => !foundry 
? <div>empyu</div> 
: !Foundry[foundry]
  ? <div>empyu</div>
  : React.createElement(Foundry[foundry], {...props, ...data, ...styled}) 

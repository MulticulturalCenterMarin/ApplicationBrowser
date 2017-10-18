/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'atomic'
import Foundry from 'foundry'
/* ------------------------ Initialize Dependencies ------------------------- */
/* ---------------------------- Module Package ------------------------------ */
let itemApplyStyle = _.curry((layout,user)=> ({...user,...layout}))

export default ({data, foundry styled}) => {
  const Styled = data ? _.map(data, _.curry(itemApplyStyle)(styled.item)) : null;
  const FoundryItems = Styled ? _.map(Styled, Foundry[foundry]) : null
  return (<Flex direction={['row']} wrap='wrap' {...props.styled} children={FoundryItems} >)
}

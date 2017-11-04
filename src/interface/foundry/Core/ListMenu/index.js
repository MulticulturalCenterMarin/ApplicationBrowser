/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import Foundry from 'foundry'
import StyleCompose from 'logic/interface/StyleCompose'

/* ------------------------------- Component -------------------------------- */
export default ({data, eid, foundry, styled, styledFlex, ...props}) => {
  console.log(eid)
  const menu = props.branches(eid)
  console.log(menu)
  console.log(styled)
  if(!foundry || !eid) return null
  const Items = menu ? _.map(menu, StyleCompose(styled)) : null;
  const ItemsPropped = _.map(Items, item=> ({...item, ...props}))
  const List = Items ? _.map(ItemsPropped, Foundry[foundry]) : null
  console.log(List)
  return (
    <Flex direction={['column']} wrap='wrap' {...styledFlex}  > 
      {List}
    </Flex>
  )
}